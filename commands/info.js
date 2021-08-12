const getEmbed = require('../utils/getEmbed')

const commandToDescription = {
    /*
        * Skeleton command for copy + paste
        cmd: "**Description:** \n\n **Aliases:** \n\n **Usage:** `c-` \n\n **Permissions:** \n\n **Cooldown:**",
    */
    avatar: "**Description:** Will provide you with your or someone else's avatar!  \n\n **Aliases:** av, icon, pfp \n\n **Usage:** `c-avatar`, `c-avatar <user>`  \n\n  **Permissions:** None \n\n **Cooldown:** 5s",
    botnick:
        "**Description:** Changes the bot's name to the text you provide, or resets it if you provide no text \n\n **Usage:** `c-botnick `, `c-botnick <new name>` \n\n **Permissions:** Bot Owner \n\n **Cooldown:** 5s",
    bunny: '**Description:** Will provide you with a cute bunny picture! \n\n **Aliases:** bun, bunno \n\n  **Usage:** `c-bunny`  \n\n  **Permissions:** None \n\n **Cooldown:** 5s',
    cat: '**Description:** Will provide you with a cute kitty picture! \n\n **Aliases:** kitty, catto \n\n  **Usage:** `c-cat`  \n\n  **Permissions:** None \n\n **Cooldown:** 5s',
    help: '**Description:** Introduces you to the bot and shows you the commands! \n\n **Usage:** `c-help` \n\n **Permissions:** None \n\n **Cooldown:** 5s',
    hi: '**Description:** Use this command and the bot will greet you! \n\n **Usage:** `c-hi` \n\n **Permissions:** None \n\n **Cooldown:** 5s',
    hug: '**Description:** Give yourself, or someone else, a hug! \n\n **Usage:** `c-hug`, `c-hug <user>` \n\n **Permissions:** None \n\n **Cooldown:** 5s',
    info: '**Description:** Provides information on other commands! \n\n **Usage:** `c-info <command name>` \n\n **Permissions:** None \n\n **Cooldown:** 5s',
    ping: "**Description:** Use this command to show the bot's current response time! \n\n **Usage:** `c-ping` \n\n **Permissions:** None \n\n **Cooldown:** 5s",
    randomcolour:
        '**Description:** The bot will generate a random colour, provide you the RGB and HEX code for the provided colour and a link to a Google search for the colour! \n\n **Aliases:** randomcolor, rcolour, rcolor  \n\n **Usage:** `c-randomcolour` \n\n **Permissions:** None \n\n **Cooldown:** 10s',
    reload: "**Description:** Reloads a command that you provide, so the bot doesn't need to be restarted to update a command's code \n\n **Aliases:** rel \n\n **Usage:** `c-reload <command>` \n\n **Permissions:** Bot Owner Only",
    repeat: '**Description:** The bot repeats a message you provide \n\n **Aliases:** say \n\n **Usage:** `c-repeat <message>` \n\n **Permissions:** \n\n **Cooldown:** 5s',
    serotonin:
        '**Description:** Provides you or another user with links to Reddit and Twitter pages to give you serotonin! \n\n **Usage:** `c-serotonin`, `c-serotonin <user>`\n\n **Permissions:** None \n\n **Cooldown:** 5s',
    userid: '**Description:** The bot returns your Discord user ID! \n\n **Aliases:** id, uid \n\n **Usage:** `c-userid` \n\n **Permissions:** None \n\n **Cooldown:** 5s',
    update: '**Description:** Provides you with the most recent update to the bot! \n\n **Aliases:** upd \n\n **Usage:** `c-update`\n\n **Permissions:** None \n\n **Cooldown:** 5s',
    uptime: '**Description:** See how long the bot has been running since last restart! \n\n **Usage:** `c-uptime` \n\n **Permissions:** None \n\n **Cooldown:** 5s',
    weather:
        '**Description:** Provides weather info on a city / zip code! \n\n **Usage:** `c-weather <city/zip code>`\n\n **Permissions:** None \n\n **Cooldown:** 5s',
    setstatus:
        '**Description:** Gives the bot a new status, or resets it to nothing \n\n **Usage:** `c-setstatus`, `c-setstatus <new status>` \n\n **Permissions:** Bot Owner \n\n **Cooldown:** 5s',
    createinvite: "**Description:** Creates a one-use invite for the server the command is used in! \n\n **Usage:** `c-createinvite` \n\n **Permissions:** Bot Owner \n\n **Cooldown:** 5s",
    roll: "**Description:** Roll a number between 1 and a number you provide! \n\n **Usage:** `c-roll <num>` \n\n **Permissions:** None \n\n **Cooldown:** 5s",
}

module.exports = {
    name: 'info',
    description: 'command to show description of the command provided',
    cooldown: 5,
    execute(message, args) {
        const description = commandToDescription[args[0]]
        if (description == null) {
            if (Math.random() < 0.25) {
                return message.reply(
                    'please provide a valid command to get info on! \n *Hint: use `c-help` to see the list of commands!*'
                )
            } else {
                return message.reply('please provide a valid command to get info on!')
            }
        }

        const embed = getEmbed().setTitle((args[0]=='weather') ? `weather :warning: WIP (command broken)` : `${args[0]}`).setDescription(description)

        return message.channel.send(embed)
    },
}