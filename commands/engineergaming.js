const { MessageAttachment } = require('discord.js')
const { ownerID } = require('../config.json')

module.exports = {
    name: 'engineergaming',
    description: 'engineer gaming',
    execute(message) {
        if (message.author.id != ownerID) {
            const user = message.author
            message.channel.send(`${user}, you're not allowed to use this command!`)
        } else {
            const attachment = new MessageAttachment('./media/engiegaming.mp4', 'engineergaming.mp4')
            message.channel.send(attachment)
            message.delete()
        }
    },
}