const randomBetween = require('../utils/randomBetween')
const { Permissions } = require('discord.js');

module.exports = {
    name: 'getreal',
    description: 'get real',
    cooldown: 5,
    execute(message) {

        const gifs = [
            'https://tenor.com/view/get-real-scott-the-woz-scott-the-woz-get-real-funny-real-gif-23170110',
            'https://tenor.com/view/get-real-gif-23169318',
            'https://tenor.com/view/get-real-cat-skate-funny-meme-gif-18666878',
            'https://tenor.com/view/getreal-gif-18750509',
            'https://tenor.com/view/get-real-gif-20585094',
            'https://tenor.com/view/get-real-skating-cat-what-how-what-gif-20810470', // 5
            'https://tenor.com/view/get-real-the-sound-of-poggers-gif-18701237',
            'https://tenor.com/view/get-real-gif-21384923',
            'https://tenor.com/view/sonic-the-hedgehog-sonic-get-real-get-real-gif-19386744',
            'https://tenor.com/view/get-real-nintendo-funny-gif-18779041',
            'https://tenor.com/view/bob-fnf-bob-fnf-get-real-get-real-fnf-gif-21665283', // 10
            'https://tenor.com/view/get-real-trombone-cruel-angels-thesis-gif-20305175',
            'https://tenor.com/view/porter-robinson-second-sky-air-to-earth-get-real-gif-23206073',
            'https://tenor.com/view/get-real-watermelon-speed-speed-up-eating-gif-20032777',
            'https://tenor.com/view/get-real-sexy-among-us-gif-19307656',
        ]

        if(message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            message.delete()
            message.channel.send({content: `${gifs[randomBetween(0, 14)]}`});
        } else
        
        message.reply({content: `${gifs[randomBetween(0, 14)]}`})
    },
}
