const getEmbed = require('../utils/getEmbed')
const randomBetween = require('../utils/randomBetween')

module.exports = {
    name: 'bunny',
    aliases: ['bun', 'bunno'],
    description: 'this is a bunny command!',
    cooldown: 5,
    execute(message) {
        const imageNumber = randomBetween(0, 57)

        const bunnyPicArray = new Array(
            '23cua2',
            '4li0b6',
            'cc8efq',
            'fkjm36',
            'gqrdqs',
            'i2exn9',
            'y2rlnp',
            '0imb01',
            '6v9s2n',
            '7alnkw',
            '843xih',
            '9rvzjv',
            'fhiqbw',
            'hbrj86',
            'jk5twf',
            'r0kume',
            '1xazn5',
            'b48j50',
            'dei3lc',
            'fhq59y',
            'r49u2e',
            'y1nyyw',
            '0yzygn',
            '1kaejm',
            '9p5fuq',
            'gfrtof',
            'n3oyg5',
            'q110wa',
            'vxewjy',
            '7qwilj',
            'a3n4br',
            'k3a2ty',
            'lyj4h9',
            'neapp6',
            '18x4vw',
            '4p191m',
            '6z5h3e',
            '982pcu',
            'ezys43',
            'hpg7jo',
            'pkx2vc',
            'qjjfz3',
            '0f63zy',
            '2zxea6',
            '7k1q96',
            'gzx81x',
            'mxarvn',
            'x2hu5q',
            'xnewuq',
            '1wc76g',
            'j3y23h',
            'mmwbrv',
            'nlz5g2',
            'tf0kqb',
            'tgp9jm',
            'y1n1o9',
            '097uoc',
            '66o120'
        )

        const secret1 = 'https://slug.feen.us/kl6qmy.jpg'

        if (Math.random() < 0.001) {
            //happens at a 0.01% chance
            const embed = getEmbed()
                .setTitle('Wow! You found a secret image!')
                .setColor('B3F1F2')
                .setDescription(`He do be skatin doe :flushed: (Image has a 0.01% chance of appearing)`)
                .setImage(secret1)
            message.channel.send({ embeds: [embed] })
            return
        } else {
            const embed = getEmbed()
                .setDescription(`Img no. ${imageNumber}`)
                .setImage(`https://slug.feen.us/${bunnyPicArray[imageNumber]}.jpg`)
                .setTitle(imageNumber == 12 ? 'Here is the anatomy of a bunny! 🐇' : 'Here is your bunny picture! 🐇')

            message.reply({ embeds: [embed] })
        }
    },
}
