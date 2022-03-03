const getEmbed = require('../utils/getEmbed')

module.exports = {
    name: 'update',
    description: 'this is an update command!',
    aliases: ['upd', 'changelog'],
    cooldown: 5,
    execute(message) {
        const embed = getEmbed()
            .setTitle('**Update as of** <t:1646348482:R>')
            .addFields({
                name: '**__Changelog:__**',
                value: '• Finally fixed everything after the DJS update',
                inline: true,
            })
            .addField('__Notes:__', 'As always, you can get more info on a command using `c-info <command name>`!')

        message.channel.send({embeds: [embed]})
    },
}


/* SKELETON CODE FOR UPDATING (mostly useless)

.setTitle("Update as <t:unix:R>") <-- Use the unix command when making a new update for the current-ish time
.addFields({
    name: "**Changelog:**",
    value:"",
    inline:true})

*/