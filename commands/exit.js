const { ownerID } = require('../config.json')

module.exports = {
    name: 'exit',
    description: 'shut down the bot',
    cooldown: 5,
    execute(message) {
        if (message.author.id == ownerID) {
        console.log('>>> Kill command was given :(')
        process.exit();
        } else {
            console.log('>>> Someone tried to turn me off')
            message.channel.send(`You're not my owner! You can't shut me down >:(`)
        }
    },
}