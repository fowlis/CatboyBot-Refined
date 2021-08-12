const Discord = require('discord.js')
const fs = require('fs')

const { prefix, token, ownerID } = require('./config.json')
const getEmbed = require('./utils/getEmbed.js')

const client = new Discord.Client({ws:{ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_REACTIONS'] }, partials: ['MESSAGE', 'CHANNEL', 'REACTION'], disableEveryone: true })

var dayjs = require('dayjs')

client.commands = new Discord.Collection()
client.cooldowns = new Discord.Collection()

// * checking all commands or something i forgot what this does
const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}
// *

// * when bot is ready, log to console and set status
client.on('ready', () => {
    console.log('>>> CatboyBot starting... \n>>> CatboyBot ready!')
    client.user.setPresence({
        activity: { name: 'with a ball of yarn :3 | created by slughead#9295' },
        status: 'online',
    })
})
// *

// * check if message is a command
client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()

    const command =
        client.commands.get(commandName) ??
        client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName))
// *

    if (!command) {
        // * if prefix is used but no command is given
        if (commandName.length <= 0) {
            return message.reply(`you didn't give me a command to run!`)
        } // *
        // * if prefix is used but command is unknown
        if (Math.random() < 0.25) {
            const shortCommand = commandName.slice(0, 20)
            message.reply(`this command \`${shortCommand}${shortCommand.length < commandName.length ? '...' : ''}\` doesn't seem to exist. Please try another command! \n *Hint: use \`c-help\` to see the list of commands!*`)
        } else {
            const shortCommand = commandName.slice(0, 20)
            message.reply(`this command \`${shortCommand}${shortCommand.length < commandName.length ? '...' : ''}\` doesn't seem to exist. Please try another command!`)}
        return
        // *
    }

    // * cooldown stuff
    const { cooldowns } = client

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection())
    }

    const now = Date.now()
    const timestamps = cooldowns.get(command.name)
    const cooldownAmount = (command.cooldown || 3) * 1000

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000
            return message.reply(
                `please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`
            )
        }
    } // *

    // * check if user is owner, if true: exempt from cooldown
    if (message.author.id != ownerID) {
        timestamps.set(message.author.id, now)
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)
    } // *

    try {
        const hasSucceeded = command.execute(message, args, client)

        // * this embed is pasted into a channel in my own server to log command usage
        const embed = getEmbed()
            .setTitle(`Command Execute =^0ω0^=`)
            .addFields({
                name: 'What?',
                value: `\`${commandName}\` command`,
                inline: false,
            })
            .addFields({
                name: 'Where?',
                value: `In ${(!message.guild) ? message.author.tag + "'s DMs" : message.guild?.name} \n ID: ${message.guild?.id ?? message.author.id}`,
                inline: false,
            })
            .addFields({
                name: 'Who?',
                value: `User ${message.author.tag} \n ID: ${message.author.id}`,
                inline: true,
            })
            .addFields({
                name: 'When?',
                value: `On <t:${dayjs().unix()}:D>, at <t:${dayjs().unix()}:t>`,
                inline: false,
            })
            .addFields({
                name: 'Success?',
                value: `${hasSucceeded ? 'True' : 'False'} \n Args: ${(!args) ? 'None' : `${args}`}`,
                inline: false
            })

        client.channels.cache.get('854903507471433728').send(embed)
        // *
    
    // * if there's as error, it does this thing
    } catch (error) {
        console.error(error)
        message.reply(`uh oh! It seems you've run into an error: \n ${error}`)
    } // *
})
client.login(token)