var dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
var utc = require('dayjs/plugin/utc')
dayjs.extend(relativeTime)
dayjs.extend(utc)

module.exports = {
    name: 'uptime',
    description: 'see how long the bot has been running since last restart!',
    cooldown: 5,
    execute: async (message, args, client) => {
        const uptime = dayjs.utc(client.uptime).format('HH[h], mm[m], ss[s]').replace('00h, ', '').replace('00m, ', '')
        message.channel.send(`Hi! I started roughly ${dayjs(0).from(client.uptime)} \`(${uptime})\``)
    },
}