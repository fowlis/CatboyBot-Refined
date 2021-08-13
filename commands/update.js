const getEmbed = require('../utils/getEmbed')

module.exports = {
    name: 'update',
    description: 'this is an update command!',
    aliases: ['upd'],
    cooldown: 5,
    execute(message) {
        const embed = getEmbed()
            .setTitle('**Update as of** <t:1628734500:R>')
            .addFields({
                name: '**__Changelog:__**',
                value: '• Removed commands: `cum`, `eject`, `engineergaming`. \n • Some command info pages have been updated, nothing major. \n • `ping` command cooldown is now 15s, to prevent spam',
                inline: true,
            })
            .addField('__Notes:__', 'As always, you can get more info on a command using `c-info <command name>`!')

        message.channel.send(embed)
    },
}


/* SKELETON CODE FOR UPDATING (mostly useless)

.setTitle("Update as <t:unix:R>") <-- Use the unix command when making a new update for the current-ish time
.addFields({
    name: "**Changelog:**",
    value:"",
    inline:true})

*/