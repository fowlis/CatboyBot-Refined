const getEmbed = require('../utils/getEmbed')

module.exports = {
    name: 'eject',
    description: 'eject your friends using this command!',
    aliases: ['ej'],
    cooldown: 5,
    execute(message) {
        const user = message.mentions.users.first()

        if (!user) {
            message.reply('please mention a user to eject!')
        } else {
            const embed = getEmbed()
                .setTitle(`${user.username} was ejected.`)
                .setImage('https://i.imgur.com/jUpWqqw.gif')
            message.channel.send(embed)
        }
    },
}