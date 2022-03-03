const { ownerID } = require('../config.json')

module.exports = {
    name: 'botnick',
    description: 'botnick',
    cooldown: 5,
    execute(message, args) {
        if (!message.guild) return

        let isOwner = message.author.id == ownerID

        if (!isOwner) {
            message.reply('you must be the bot owner to run this command, sorry!')
        } else {
            if (!args[0]) {
                message.reply(`you didn't give me a new name! Resetting name to default...`)
                message.guild.me.setNickname('')
            } else {
                message.guild.me.setNickname(args.join(' '))
                message.reply(`I changed my name to: \`${args.join(' ')}\``)
            }
        }
    },
}
