const { ownerID } = require('../config.json')

module.exports = {
    name: 'setstatus',
    description: 'setstatus',
    cooldown: 5,
    execute(message, args) {
        if (message.author.id != ownerID) {
            message.reply('you must be the bot owner to run this command, sorry!')
        } else {
            if (!args[0]) {
                message.reply(`you didn't give me a new status! Clearing status...`)
                message.client.user.setPresence({ activity: null })
            } else {
                message.channel.send(`I changed my status to: \`${args.join(' ')}\``)
                message.client.user.setPresence({ activity: { name: `${args.join(' ')}` }, status: 'online' })
            }
        }
    },
}