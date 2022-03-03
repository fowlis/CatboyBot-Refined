module.exports = {
    name: 'googleforme',
    description: 'google term for me',
    aliases: ['gglfm','gfm'],
    cooldown: 5,
    execute(message, args) {
        if (args == '') {
            message.channel.send('You need to give me something to Google!')
            return
        } else var query = args.join('+')
        message.reply({content:`http://googleitfor.me/?q=${query}`})
    },
}