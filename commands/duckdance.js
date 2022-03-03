const getEmbed = require('../utils/getEmbed')

module.exports = {
    name: 'duckdance',
    description: 'duck dance',
    execute(message) {
        const embed = getEmbed()
            .setTitle('Look at him go!')
            .setImage('https://media1.tenor.com/images/ba3b6a898fbf527ef2dadff516a6089d/tenor.gif?itemid=21217404')
        message.reply({embeds:[embed]})
    }
}
