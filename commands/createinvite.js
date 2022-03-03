const { ownerID } = require('../config.json')

module.exports = {
    name: 'createinvite',
    description: 'create an invite link for your server!',
    aliases: ['invlink'],
    cooldown: 5,
    execute(message) {
        if (!message.guild) return

        if (message.author.id != ownerID) {
            message.reply('you must be the bot owner to run this command, sorry!')
        } else {
            let channel = message.channel
            channel.createInvite({ unique: true, maxUses: 1 }).then((invite) => {
                message.reply(
                    "Hey! I've created you an invite, it has one use - so use it wisely! \n https://discord.gg/" +
                        invite.code
                )
            })
        }
    },
}
