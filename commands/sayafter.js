module.exports = {
    name: 'sayafter',
    description: 'yes',
    cooldown: 5,
    execute: async (message, args) => {

        var a = Number(args[0]);
        var b = args.pop(0)
        var c = a * 1000;

        if (isNaN(a) || !Number.isInteger(a)) { return message.reply("test: args[0] is not a number")}

        const myMessage = await message.channel.send(`I've set a reminder for you! I will remind you of "${b}", in ${a} seconds!`)
        setTimeout(() => {
            myMessage.delete();
            message.reply(`${b}`)
        }, c)
    },
}