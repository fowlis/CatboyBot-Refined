const randomBetween = require('../utils/randomBetween')

module.exports = {
    name: 'roll',
    description: 'this is a roll command!',
    cooldown: 5,
    execute: async (message, args) => {
        const num = Number(args)

        if (isNaN(num) || !Number.isInteger(num)) {
            message.reply("you didn't give me a number, or you gave me a format of numbers I can't read!")
            return
        }

        if (num <= 1 || num >= 10000) {
            message.reply('you need to give me a number higher than 1 and lower than 10000 to roll! Any number between 2 and 9999 is ok!')
            return
        }

        const roll = randomBetween(1, num)
        const myMessage = await message.channel.send(`I roll a...`)
        setTimeout(() => {
            if (roll == 69) myMessage.edit(`I roll a... ` + roll + '! Nice :wink:')
            else myMessage.edit(`I roll a... ` + roll + '!')
        }, 1500)
    },
}