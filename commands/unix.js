var dayjs = require('dayjs')
const getEmbed = require('../utils/getEmbed')

module.exports = {
    name: 'unix',
    description: 'grab current unix timestamp!',
    cooldown: 5,
    execute: async (message) => {
        const embed = getEmbed()
        embed
            .setTitle(`Current Unix Timestamp: \`${dayjs().unix()}\``)
            .setDescription(
                `__**Formats:**__ \n • <t:${dayjs().unix()}:d> \n • <t:${dayjs().unix()}:f> \n • <t:${dayjs().unix()}:t> \n • <t:${dayjs().unix()}:D> \n • <t:${dayjs().unix()}:F> \n • <t:${dayjs().unix()}:R> \n • <t:${dayjs().unix()}:T>`
            )
        message.channel.send({ embeds: [embed] })
    },
}
