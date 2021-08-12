module.exports = {
    name: 'cum',
    description: 'cum',
    cooldown: 5,
    execute(message) {
        message.channel.send('cum');
        message.delete();
    },
}