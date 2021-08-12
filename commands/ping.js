module.exports = {
    name: 'ping',
    description: 'this is a ping command!',
    cooldown: 5,
    execute: async (message) => {
        var pingMsg = await message.channel.send({
            embed: {
                color: 'f2b5b4',
                description: 'Pong!',
            },
        })

        pingMsg.edit({
            embed: {
                color: 'f2b5b4',
                description: 'Pong!\n' + Math.round(pingMsg.createdTimestamp - message.createdTimestamp) + 'ms',
            },
        })
    },
}