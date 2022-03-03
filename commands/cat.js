const getEmbed = require('../utils/getEmbed')
const randomBetween = require('../utils/randomBetween')

module.exports = {
    name: 'cat',
    aliases: ['kitty', 'catto'],
    description: 'this is a cat command!',
    cooldown: 5,
    execute: async (message) => {
        const imageNumber = randomBetween(1, 59)

        const catPicArray = new Array(
            'xzxl2n',
            'g4nnho',
            '2vbbwc',
            'nukdhi',
            'a30w7e',
            'ne7kro',
            '8khzyj',
            'o3k8px',
            'nhnfob',
            'ihb9dw',
            'htbcqu',
            'xecmdr',
            'rnxeel',
            'c83wrl',
            'aqq1y7',
            'skoajl',
            'opsz8q',
            'mskuva',
            'ct8b58',
            'aj4t95',
            'd7qz1k',
            '2dat6k',
            '0srmgn',
            'leqi6l',
            'eeusap',
            '3i9ylu',
            '28iupe',
            'wvh45h',
            'mfb8xv',
            'g6wg2y',
            '4kfmth',
            '2t5e58',
            '45mp0y',
            'uq3b3e',
            'uny3yk',
            'f0s0a4',
            'etwpe6',
            '3w5m8z',
            '3w5m8z',
            'okd26q',
            'gw5szh',
            'gbircs',
            'x0tf2c',
            't9v3d2',
            'sz4lq0',
            'kqa2i9',
            'guv65c',
            'wlrueb',
            'ovcq1l',
            'yaatb9',
            'w0qc56',
            '5hjzdj',
            '1s20i0',
            'tawj0n',
            'i5mbix',
            'f6k6d7',
            '6ph845'
        )

        const embed = getEmbed()

        if (Math.random() < 0.001) {
            //happens at a 0.01% chance
            embed
                .setTitle('Wow! You found a secret image!')
                .setColor('B3F1F2')
                .setDescription('This image has a 0.01% chance of appearing! =0.0=')
                .setImage('https://slug.feen.us/0oujlr.jpg')
            message.channel.send({embeds: [embed]})
        } else if (Math.random() < 0.01) {
            //happens at a 0.1% chance
            embed
                .setTitle('A pack of Squirtle cats has appeared!')
                .setColor('B3F1F2')
                .setDescription('They have a 0.1% chance of appearing! =0.0=')
                .setImage('https://i.imgur.com/CS9sszt.gif')
            message.channel.send({embeds: [embed]})
        } else if (Math.random() < 0) { //broken until i fix it -- 0.00025 for number 
            //happens at a 0.0025% chance
            embed
                .setTitle(`You step into a Burger Kitty!`)
                .setColor('B3F1F2')
                .setDescription(
                    'What would you like to order? \n 1 for Burger, 2 for Cola! \n (0.0025% chance of appearing! =0.0=)'
                )
                .setImage('https://slug.feen.us/d1d5g2.jpg')
            message.channel.send({embeds: [embed]}).then((sentEmbed) => {
                sentEmbed.react('1️⃣')
                sentEmbed.react('2️⃣')

                const filter = (reaction, user) => {
                    return ['1️⃣', '2️⃣'].includes(reaction.emoji.name) && user.id === message.author.id
                }
                sentEmbed
                    .awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                    .then((collected) => {
                        const reaction = collected.first()

                        if (reaction.emoji.name === '1️⃣') {
                            const embedBurger = getEmbed()
                            embedBurger
                                .setTitle(`Here is your burger, customer!`)
                                .setColor('B3F1F2')
                                .setDescription('Thank you for ordering at Burger Kitty!')
                                .setImage('https://slug.feen.us/bczhc7.png')
                            message.channel.send({embeds: [embedBurger]})
                        } else if (reaction.emoji.name === '2️⃣') {
                            const embedCola = getEmbed()
                            embedCola
                                .setTitle(`Here is your cola, customer!`)
                                .setDescription('Thank you for ordering at Burger Kitty!')
                                .setColor('B3F1F2')
                                .setImage('https://slug.feen.us/i1vlbw.jpg')
                            message.channel.send({embeds:[embedCola]})
                        }
                    })
                    .catch((collected) => {
                        message.reply('you took too long to order :( The window has closed!')
                    })
            })
        } else {
            embed
                .setTitle('Here is your kitty picture! 🐈')
                .setDescription(`Img no. ${imageNumber}`)
                .setImage(`https://slug.feen.us/${catPicArray[imageNumber]}.jpg`)
            message.channel.send({embeds: [embed]})
        }
    },
}
