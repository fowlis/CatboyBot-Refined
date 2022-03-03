const { ownerID } = require('../config.json')

module.exports = {
    name: 'setstatus',
    description: 'setstatus',
    cooldown: 5,
    execute(message, args, client) {
        if (message.author.id != ownerID) {
            message.reply({ content: 'you must be the bot owner to run this command, sorry!' })
        } else {
            if (!args[0]) {
                message.reply({ content: `you didn't give me a new status! Clearing status...` })
                message.client.user.setPresence({ activity: null })
            } else {
                message.channel.send({ content: `I changed my status to: \`${args.join(' ')}\`` })
                client.user.setPresence({ activites: [{ name: `${args.join(' ')}` }], status: 'online' })
            }
        }
    },
}
