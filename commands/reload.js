const { ownerID } = require('../config.json')
const getEmbed = require('../utils/getEmbed')

module.exports = {
    name: 'reload',
    aliases: ['rel'],
    description: 'Reloads a command',
    cooldown: 5,
    execute(message, args) {
        if (message.author.id != ownerID) {
            message.channel.send({content: `${message.author}, you're not allowed to use this command!`})
            return
        }

        if (args.length === 0) return message.reply(`you didn't pass a command to reload!`)

        const commandName = args[0].toLowerCase()
        const command =
            message.client.commands.get(commandName) ??
            message.client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName))

        if (!command) return message.reply({content: `there is no command with name or alias \`${commandName}\`!`})

        delete require.cache[require.resolve(`./${command.name}.js`)]

        try {
            const newCommand = require(`./${command.name}.js`)
            message.client.commands.set(newCommand.name, newCommand)
        } catch (error) {
            console.error(error)
            message.reply({content:`there was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``})
        }

        const embed = getEmbed()
            .setTitle(`Command "${commandName}" was reloaded successfully!`)
            .setDescription('No errors found while reloading.')

        message.channel.send({embeds: [embed]})
    },
}