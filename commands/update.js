const getEmbed = require('../utils/getEmbed')

module.exports = {
    name: 'update',
    description: 'this is an update command!',
    aliases: ['upd', 'changelog'],
    cooldown: 5,
    execute(message) {
        const embed = getEmbed()
            .setTitle('**Update as of** <t:1635706208:R>')
            .addFields({
                name: '**__Changelog:__**',
                value: '• Added some new cat pictures\n• Reduced the chance of the "Burger Kitty" event appearing\n• Removed Herobrine',
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