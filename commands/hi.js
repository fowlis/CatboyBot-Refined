module.exports = {
    name: 'hi',
    description: 'this is a hello command!',
    cooldown: 5,
    execute(message) {
        message.channel.send({ content: `Hello! (=｀ω´=)` })
    },
}
