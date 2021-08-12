var dayjs = require('dayjs')

module.exports = {
    name: 'unix',
    description: 'grab current unix timestamp!',
    cooldown: 5,
    execute: async (message) => {
        message.channel.send(`The current unix timestamp is ${dayjs().unix()}, <t:${dayjs().unix()}:f>`)
    },
}