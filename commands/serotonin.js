const getEmbed = require('../utils/getEmbed')

module.exports = {
    name: 'serotonin',
    description: 'serotonin',
    cooldown: 5,
    execute(message) {
        const user = message.mentions.users.first()

        const embed = getEmbed()
            .setTitle(`:postbox: Serotonin delivery for ${user?.username ?? 'you'}!`)
            .setDescription('Here are some serotonin-inducing subreddits / twitter pages for you!')
            .addFields({
                name: '**__Subreddits__**',
                value: '[r/aww](https://www.reddit.com/r/aww/) \n [r/Eyebleach](https://www.reddit.com/r/Eyebleach/) \n [r/cats](https://www.reddit.com/r/cats/) \n [r/dogs](https://www.reddit.com/r/dogs/) \n [r/rabbits](https://www.reddit.com/r/Rabbits/)',
                inline: true,
            })
            .addFields({
                name: '**__Twitter Pages__**',
                value: '[@catsdotexe](https://twitter.com/catsdotexe) \n [@catsplacess](https://twitter.com/catsplacess) \n [@blessurfeed](https://twitter.com/blessurfeed) \n [@dogeveryhour](https://twitter.com/dogeveryhour) \n [@RabbitEveryHour](https://twitter.com/RabbitEveryHour)',
                inline: true,
            })
            .addFields({
                name: 'Or...',
                value: 'Use the `c-cat` or `c-bunny` commands for quick pics!',
                inline: false,
            })

        message.channel.send({embeds: [embed]})
    },
}