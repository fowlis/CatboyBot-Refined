const getEmbed = require('../utils/getEmbed')

module.exports = {
    name: 'userid',
    aliases: ['uid', 'id'],
    description: 'this is a user ID command!',
    cooldown: 5,
    execute(message) {
        const embed = getEmbed().setTitle(`${message.author.username}, your user ID is ${message.author.id}`)

        message.channel.send(embed)
    },
}