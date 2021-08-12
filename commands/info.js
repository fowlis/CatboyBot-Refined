const getEmbed = require('../utils/getEmbed')

const commandToDescription = {
    /*
        * Skeleton command for copy + paste
        cmd: "**Description:** \n\n **Aliases:** \n\n **Usage:** `c-` \n\n **Permissions:** \n\n **Cooldown:**",
    */
    avatar: "**Description:** Provides you with your or someone else's avatar!  \n\n **Aliases:** av, icon, pfp \n\n **Usage:** `c-avatar`, `c-avatar <user>`  \n\n  **Permissions:** None \n\n **Cooldown:** 5s",
    botnick:
        "**Description:** Changes the bot's name to the text you provide, or resets it if you provide no text! \n\n **Usage:** `c-botnick`, `c-botnick <new name>` \n\n **Permissions:** Bot Owner \n\n **Cooldown:** 5s",
    bunny: '**Description:** Provides you with a cute bunny picture! \n\n **Aliases:** bun, bunno \n\n  **Usage:** `c-bunny`  \n\n  **Permissions:** None \n\n **Cooldown:** 5s',
    cat: '**Description:** Provides you with a cute kitty picture! \n\n **Aliases:** kitty, catto \n\n  **Usage:** `c-cat`  \n\n  **Permissions:** None \n\n **Cooldown:** 5s',
    help: '**Description:** Introduces you to the bot and shows you the commands! \n\n **Usage:** `c-help` \n\n **Permissions:** None \n\n **Cooldown:** 5s',
    hi: '**Description:** The bot will greet you! \n\n **Usage:** `c-hi` \n\n **Permissions:** None \n\n **Cooldown:** 5s',
    hug: '**Description:** Give yourself, or someone else, a hug! \n\n **Usage:** `c-hug`, `c-hug <user>` \n\n **Permissions:** None \n\n **Cooldown:** 5s',
    info: '**Description:** Provides information on other commands! \n\n **Usage:** `c-info <command name>` \n\n **Permissions:** None \n\n **Cooldown:** 5s',
    ping: "**Description:** Shows the bot's current response time! \n\n **Usage:** `c-ping` \n\n **Permissions:** None \n\n **Cooldown:** 5s",
    randomcolour:
        '**Description:** Generate a random colour, then provide you the RGB and HEX code for the generated colour and a link to a Google search for the colour! \n\n **Aliases:** randomcolor, rcolour, rcolor  \n\n **Usage:** `c-randomcolour` \n\n **Permissions:** None \n\n **Cooldown:** 10s',
    reload: "**Description:** Reloads a provided command, so the bot doesn't need to be restarted to update a command's code! \n\n **Aliases:** rel \n\n **Usage:** `c-reload <command>` \n\n **Permissions:** Bot Owner Only \n\n **Cooldown:** 5s",
    serotonin:
        '**Description:** Provides you or another user with links to Reddit and Twitter pages to give you serotonin! \n\n **Usage:** `c-serotonin`, `c-serotonin <user>`\n\n **Permissions:** None \n\n **Cooldown:** 5s',
    userid: '**Description:** Shows you your Discord user ID! \n\n **Aliases:** id, uid \n\n **Usage:** `c-userid` \n\n **Permissions:** None \n\n **Cooldown:** 5s',
    update: '**Description:** Provides you with the most recent update to the bot! \n\n **Aliases:** upd \n\n **Usage:** `c-update`\n\n **Permissions:** None \n\n **Cooldown:** 5s',
    uptime: '**Description:** Shows you how long the bot has been running since last restart! \n\n **Usage:** `c-uptime` \n\n **Permissions:** None \n\n **Cooldown:** 5s',
    setstatus:
        '**Description:** Gives the bot a new status (to the args provided), or resets it to nothing (when no args provided)! \n\n **Usage:** `c-setstatus`, `c-setstatus <new status>` \n\n **Permissions:** Bot Owner \n\n **Cooldown:** 5s',
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
                    `the \`{args[0]}\` command doesn't have an info page, or isn't a valid command! \n *Hint: use \`c-help\` to see the list of commands!*`
                )
            } else {
                return message.reply(`the \`{args[0]}\` command doesn't have an info page, or isn't a valid command!`)
            }
        }

        const embed = getEmbed().setTitle((args[0]=='weather') ? `weather :warning: WIP (command broken)` : `${args[0]}`).setDescription(description)

        return message.channel.send(embed)
    },
}