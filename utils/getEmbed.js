const Discord = require('discord.js')

module.exports = function getEmbed() {
    return new Discord.MessageEmbed()
        .setColor('f2b5b4')
        .setTimestamp()
        .setFooter({text: 'Thank you for using CatboyBot!', options: 'https://i.imgur.com/xMIQfCE.png'})
}
