const getEmbed = require('../utils/getEmbed')

module.exports = {
    name: 'help',
    description: 'this is a help command!',
    cooldown: 5,
    execute: async(message ,args) => {
        const helpEmbed = getEmbed()
            .setTitle("__Welcome to CatboyBot! slughead's little project.__")
            .setDescription("Here you will find the bot's commands! \n You can optionally get this message sent to your DMs by using `c-help dm`!")
            .addFields({
                name: '**__Basic Commands__**',
                value: '`avatar` \n `help` \n `info` \n `ping` \n `update` \n `uptime` \n `userid`',
                inline: true,
            })
            .addFields({
                name: '**__Fun Commands__**',
                value: '`bunny` \n `cat` \n `hi` \n `hug` \n `randomcolour` \n `serotonin`',
                inline: true,
            })
            .addFields({
                name: '**__Bot Owner Commands__**',
                value: '`createinvite` \n `reload` \n `setstatus` \n `botnick`',
                inline: true,
            })
            .addFields({
                name: '**__Tips:__**',
                value: '• Use `c-info <command>` to read more about a command! \n • Use `c-update` to see the latest update message for the bot!',
                inline: true,
            })
            .addFields({
                name: '**__Any issues/questions? Contact me!__**',
                value: `• Discord: slughead#9295 \n • Email: fowlis@pm.me`,
                inline: false,
            })

        if (args == 'dm') { // * sends embed to dms
            if (!message.guild) {
                message.author.send(`I'm already in your DMs, silly! Here's the help embed anyway:`, [helpEmbed])
                // * runs if command and args is used in dms
                return
            } else
            try { 
                await message.author.send(`You've got mail! :mailbox_with_mail:`, [helpEmbed])
                message.channel.send(`Check your DMs, ${message.author}!`);
                return;
                // * runs if command and args is used outwith dms
            } catch (err) { // * runs if user has dms from serv members disabled
                message.channel.send(`Looks like I can't send you DMs :( Update your privacy settings to allow DMs from server members so I can DM you! \nOr, run the \`c-help\` command instead`)
            }
            
            return
        } else message.channel.send(helpEmbed)
        // * runs if command is used anywhere else & without args

    },
}