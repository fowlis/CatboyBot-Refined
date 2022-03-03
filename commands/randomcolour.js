const getEmbed = require('../utils/getEmbed')
const randomBetween = require('../utils/randomBetween')

module.exports = {
    name: 'randomcolour',
    aliases: ['randomcolor', 'rcolor', 'rcolour'],
    description: 'this is a randomcolour command!',
    cooldown: 5,
    execute(message) {
        const rgb = [randomBetween(0, 255), randomBetween(0, 255), randomBetween(0, 255)]

        const rgbString = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`

        // Create HEX code from RGB
        let hexString = rgb
            .map((value) => {
                const hex = value.toString(16)
                return hex.length == 1 ? '0' + hex : hex
            })
            .join('')

        const embed = getEmbed()
            .setColor(rgb)
            .setTitle(rgbString)
            .setDescription(
                `**Hex: #${hexString}**\n\n[Open in browser](https://www.google.com/search?q=%23${hexString})`
            )

        message.channel.send({embeds: [embed]})
    },
}