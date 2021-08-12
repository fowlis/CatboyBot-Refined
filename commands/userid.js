const getEmbed = require('../utils/getEmbed')

module.exports = {
    name: 'userid',
    aliases: ['uid', 'id'],
    description: 'this is a user ID command!',
    cooldown: 5,
    execute(message) {
        let success = false
        const user = message.mentions.users.first()

        const embed = getEmbed()
            .setTitle(`${user?.username ?? message.author.username}${user ? `'s` : ', your'} user ID is \`${user?.id ?? message.author.id}\``)
        message.channel.send(embed)

        success == true
        return success
    },
}