const { ownerID } = require('../config.json')
module.exports = {
    name: 'github',
    description: 'yes',
    aliases: ['gh'],
    cooldown: 5,
    execute(message, args) {
        const githubMsg = 'Here is my GitHub repo! <https://github.com/fowlis/CatboyBot-Refined>'

        if (message.author.id != ownerID) {
            message.reply('you must be the bot owner to run this command, sorry!')
            return
        }

        if (args == 'dm') {
            message.author.send({content: {githubMsg}})
            return
        } else if (!message.guild) {
            message.channel.send({content: {githubMsg}})
            return
        } else {
            message.channel.send({content: {githubMsg}})
            return
        }
    },
}