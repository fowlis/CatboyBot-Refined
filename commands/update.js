const getEmbed = require('../utils/getEmbed')

module.exports = {
    name: 'update',
    description: 'this is an update command!',
    aliases: ['upd'],
    cooldown: 5,
    execute(message) {
        const embed = getEmbed()
            .setTitle('Update as of Monday, 24th May 2021')
            .addFields({
                name: '**__Update Info:__**',
                value: '• Added an `uptime` command where you can see how long the bot has been running! \n • Updated the `c-help` embed slightly, (hopefully) better formatting! \n • Changed up the date format on the `c-update` embed',
                inline: true,
            })
            .addField('__Notes:__', 'As always, you can get more info on a command using `c-info <command name>`!')

        message.channel.send(embed)
    },
}

/* CLEAR CODE FOR UPDATING*/

/*

.setTitle("Update as of date")
.addFields({name: "**__Update Info:__**",value:"",inline:true})

*/