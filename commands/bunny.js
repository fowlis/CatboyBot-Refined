const { MessageAttachment } = require('discord.js')

const getEmbed = require('../utils/getEmbed')
const randomBetween = require('../utils/randomBetween')

module.exports = {
    name: 'bunny',
    aliases: ['bun', 'bunno'],
    description: 'this is a bunny command!',
    cooldown: 5,
    execute(message) {
        const imageNumber = randomBetween(1, 58)

        const attachment = new MessageAttachment('./media/bunny-pics/' + imageNumber + '.jpg', 'bunny.jpg')
        const secretAttachment1 = new MessageAttachment('./media/bunny-pics/skaterboi.jpg', 'secret1.jpg')
        const secretAttachment2 = new MessageAttachment('./media/bunny-pics/teacup.jpg', 'secret2.jpg')

        if (Math.random() < 0.001) {
            //happens at a 0.01% chance
            const embed = getEmbed()
                .setTitle('Wow! You found a secret image!')
                .setColor('B3F1F2')
                .setDescription(`He do be skatin doe :flushed: (Image has a 0.01% chance of appearing)`)
                .attachFiles(secretAttachment1)
                .setImage('attachment://secret1.jpg')
            message.channel.send(embed)
            return
        } else if (Math.random() < 0.0005) {
            //happens at a 0.005% chance
            const embed = getEmbed()
                .setTitle('RARE FIND!!')
                .setColor('B3F1F2')
                .setDescription(`Teacup Bunny found!`)
                .attachFiles(secretAttachment2)
                .setImage('attachment://secret2.jpg')
            message.channel.send(embed)
        } else {
            const embed = getEmbed()
                .setDescription(`Img no. ${imageNumber}`)
                .attachFiles(attachment)
                .setImage('attachment://bunny.jpg')
                .setTitle(imageNumber == 12 ? 'Here is the anatomy of a bunny! 🐇' : 'Here is your bunny picture! 🐇')

            message.channel.send(embed)
        }
    },
}
