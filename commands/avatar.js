const getEmbed = require('../utils/getEmbed')

module.exports = {
    name: 'avatar',
    aliases: ['av','icon', 'pfp'],
    description: 'this is an avatar command!',
    cooldown: 5,
    execute(message) {
        const user = message.mentions.users.first()

        const embed = getEmbed()
            .setTitle(`**${user?.username ?? message.author.username}'s Avatar**`)
            .setImage(
                user?.displayAvatarURL({ format: 'png', size: 256, dynamic: true }) ??
                    message.author.displayAvatarURL({ format: 'png', size: 256, dynamic: true })
            )
        message.channel.send(embed);
    },
}