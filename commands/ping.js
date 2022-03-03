module.exports = {
    name: 'ping',
    description: 'this is a ping command!',
    cooldown: 15,
    execute: async (message) => {
        var pingMsg = await message.reply({
            embeds: [
                {
                    color: 'f2b5b4',
                    description: 'Pong!',
                },
            ],
        })

        pingMsg.edit({
            embeds: [
                {
                    color: 'f2b5b4',
                    description: 'Pong! \n' + Math.round(pingMsg.createdTimestamp - message.createdTimestamp) + 'ms',
                },
            ],
        })
    },
}
