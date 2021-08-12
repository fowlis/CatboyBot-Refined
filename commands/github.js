const { ownerID } = require('../config.json')
module.exports = {
    name: 'github',
    description: 'yes',
    aliases: ['gh'],
    cooldown: 5,
    execute(message) {
        if (message.author.id != ownerID) {
            message.reply('you must be the bot owner to run this command, sorry!')
        } else {
            message.reply(`Here is my GitHub repo! https://github.com/fowlis/CatboyBot`)
        }
    },
}