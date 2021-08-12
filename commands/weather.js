module.exports = {
    name: 'weather',
    description: 'Responds with weather information for a specific location',
    execute(message){
        message.reply('the weather command is currently broken - check back another time!')

        /*
        ! command doesn't work
        TODO fix at some point

        const city = args;
        let degreetype = "C";

        await weather.find({search: city, degreetype: degreetype},(err, result, message) => {
        if (!city) return message.channel.send("Please name a city to get weather for! e.g. c-weather london")
        if (err || result === undefined || result.length === 0){ message.channel.send("Unknown city, please try again :(")}

        let current = result[0].current;
        let location = result[0].location;

        const embed = new Discord.MessageEmbed()
            .setAuthor(current.observationpoint)
            .setDescription(`> ${current.skytext}`)
            .setThumbnail(current.imageUrl)
            .setTimestamp()
            .setColor('f2b5b4')

        embed.addField("Feels like", `${current.feelslike}°c`, true)
            .addField("Winds", current.winddisplay, true)
            .addField("Humidity", `${current.humidity}%`, true)
            .addField("Timezone", `GMT ${location.timezone}`, true)
            .addField("Temperature", `${current.temperature}°c`)
            .addField("Observation Time", current.observationtime, true)

        return message.channel.send(embed);
        */
    },
}