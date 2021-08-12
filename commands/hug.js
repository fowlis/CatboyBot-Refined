const getEmbed = require('../utils/getEmbed')

module.exports = {
    name: 'hug',
    description: 'this is a hug command!',
    cooldown: 5,
    execute(message) {
        let success = false
        const user = message.mentions.users.first()

        const embed = getEmbed()
            .setTitle(`**${message.author.username} hugs ${user?.username ?? 'themself'}!**`)
            .setImage(user ? 'https://i.imgur.com/S4JpvwO.gif' : 'https://i.imgur.com/3pJy4mM.gif', { format: 'gif' })

        message.channel.send(embed)
        success == true
        return success
    },
}