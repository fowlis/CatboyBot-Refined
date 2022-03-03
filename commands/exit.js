const { ownerID } = require('../config.json')

module.exports = {
    name: 'exit',
    description: 'shut down the bot',
    cooldown: 5,
    execute(message) {
        if (message.author.id == ownerID) {
            console.log('>>> Kill command was given')
            message.channel.send({ content: `Shutting down in 3 seconds...` })

            setTimeout(() => {
                process.exit()
            }, 3000)
        } else {
            console.log('>>> Someone tried to turn me off')
            message.reply({ content: `You're not my owner! You can't shut me down >:(` })
        }
    },
}
