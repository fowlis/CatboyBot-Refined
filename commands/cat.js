const { MessageAttachment } = require('discord.js')

const getEmbed = require('../utils/getEmbed')
const randomBetween = require('../utils/randomBetween')

module.exports = {
    name: 'cat',
    aliases: ['kitty', 'catto'],
    description: 'this is a cat command!',
    cooldown: 5,
    execute: async (message) => {
        const imageNumber = randomBetween(1, 50)

        const attachment = new MessageAttachment('./media/cat-pics/' + imageNumber + '.jpg', 'kitty.jpg')
        const secretAttachment = new MessageAttachment('./media/cat-pics/secret.jpg', 'secret.jpg')
        const secretAttachment2 = new MessageAttachment('./media/cat-pics/secret2.jpg', 'secret2.jpg')
        const burgerAttachment = new MessageAttachment('./media/cat-pics/burger.png', 'burger.png')
        const colaAttachment = new MessageAttachment('./media/cat-pics/cola.jpg', 'cola.jpg')

        
        const embed = getEmbed();

        if (Math.random() < 0.001) {
            //happens at a 0.01% chance
            embed
                .setTitle('Wow! You found a secret image!')
                .setColor('B3F1F2')
                .setDescription('This image has a 0.01% chance of appearing! =0.0=')
                .attachFiles(secretAttachment)
                .setImage('attachment://secret.jpg')
            message.channel.send(embed)
        } else if (Math.random() < 0.01) {
            //happens at a 0.1% chance
            embed
                .setTitle('A pack of Squirtle cats has appeared!')
                .setColor('B3F1F2')
                .setDescription('They have a 0.1% chance of appearing! =0.0=')
                .setImage('https://i.imgur.com/CS9sszt.gif')
            message.channel.send(embed)
        } else if (Math.random() < 0.05) {
            //happens at a 0.5% chance
            embed
                .setTitle(`You step into a Burger Kitty!`)
                .setColor('B3F1F2')
                .setDescription('What would you like to order? \n 1 for Burger, 2 for Cola! \n (0.5% chance of appearing! =0.0=)')
                .attachFiles(secretAttachment2)
                .setImage('attachment://secret2.jpg')
            message.channel.send(embed).then(sentEmbed => {
                sentEmbed.react("1️⃣");
                sentEmbed.react("2️⃣");

                const filter = (reaction, user) => {
                    return ['1️⃣', '2️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
                };
                sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	            .then(collected => {
		            const reaction = collected.first();

		            if (reaction.emoji.name === '1️⃣') {
                    const embedBurger = getEmbed()
                    embedBurger
                            .setTitle(`Here is your burger, customer!`)
                            .setColor('B3F1F2')
                            .setDescription('Thank you for ordering at Burger Kitty!')
                            .attachFiles(burgerAttachment)
                            .setImage('attachment://burger.png')
                        message.channel.send(embedBurger)
		            } else if(reaction.emoji.name === '2️⃣'){
                    const embedCola = getEmbed()
			            embedCola
                            .setTitle(`Here is your cola, customer!`)
                            .setDescription('Thank you for ordering at Burger Kitty!')
                            .setColor('B3F1F2')
                            .attachFiles(colaAttachment)
                            .setImage('attachment://cola.jpg')
                        message.channel.send(embedCola)
		            }
	            })
                .catch(collected => {
                    message.reply('you took too long to order :( The window has closed!');
                    });
            })
            
        } else {
            embed
                .setTitle('Here is your kitty picture! 🐈')
                .setDescription(`Img no. ${imageNumber}`)
                .attachFiles(attachment)
                .setImage('attachment://kitty.jpg')
            message.channel.send(embed)
        }
    },
}