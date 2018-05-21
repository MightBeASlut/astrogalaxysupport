const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
    let messageArray = message.content.toLowerCase().split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let sort = args.join(" ");

    if(args[0] !== "mute" && args[0] !== "ban" && args[0] !== "tempban"){
        return message.channel.send("Available appeals are: Ban, Mute, Tempban!\nUsage: -appeal [appeal sort]")
     }
     
    function createChannel() {
        message.guild.createChannel(`appeal-${message.author.username}`, "text").then(channel => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            channel.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                READ_MESSAGE_HISTORY: true
            });

            channel.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false,
                READ_MESSAGE_HISTORY: false
            });
            channel.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                READ_MESSAGE_HISTORY: true
            });

            let tcreateembed = new Discord.RichEmbed()
            .setTitle("AstroGalaxy Support")
            .setColor(0xCF40FA)
            .addField(`${sort} Appeal Ticket`,`${channel}`)
            .addField(`How can I go to my appeal ticket?`, `Click on ${channel}`)
            .setTimestamp()
            .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
          
            message.channel.send({embed: tcreateembed});

            if (args[0] == "ban") {
                let appealone = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`
                    **»This is the format for your appeal. When you are appealing, we expect you to answer all these questions.«**\n\n- What is your Minecraft IGN name?\n- Why were you banned from AstroGalaxy?\n- Who banned you?\n- If you were banned for multiple warnings, why should we unban you?\n- If you were banned for hacking, why should we unban you?\n- If you were banned for another reason, please tell us why we should unban you?\n- If you were hacking, have you uninstalled your hacks?\n- Have you ever donated on the server, if so, what have you purchased?\n- Have you ever been punished on the server before?\n- Have you ever been staff on the server before, if so, what rank were you?\n- Is there anything else we should know?`)
                    .setTimestamp()
                    .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
                channel.send({embed: appealone});
            }

            if (args[0] == "tempban") {
                let appealtwo = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`
                    **»This is the format for your appeal. When you are appealing, we expect you to answer all these questions.«**\n\n- What is your Minecraft IGN name?\n- How much longer are you temp-banned for?\n- Why were you temp-banned on AstroGalaxy?\n- Who temp-banned you?\n- If you were temp-banned for multiple offences, why should we unban you?\n- Have you ever donated on the server, if so, what have you purchased?\n- Have you ever been punished on the server before?\n- Have you ever been staff on the server before, if so, what rank were you?\n- Is there anything else we should know?\n`)
                    .setTimestamp()
                    .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
                channel.send({embed: appealtwo});
            }

            if (args[0] == "mute") {
                let appealthree = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`**»This is the format for your appeal. When you are appealing, we expect you to answer all these questions.«**\n\n- What is your Minecraft IGN name?\n- Why were you muted on AstroGalaxy?\n- Who muted you (If you don't know, leave blank)?\n- If you were muted for multiple mutes, why should we unmute you?\n- Have you ever donated on the server, if so, what have you purchased?\n- Have you ever been punished on the server before?\n- Have you ever been staff on the server before, if so, what rank were you?\n- Is there anything else we should know?\n
                    `)
                    .setTimestamp()
                    .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
                channel.send({embed: appealthree});
            }
        });
    }


    if (!sort) {
        return message.reply("Invalid usage: -appeal [appeal category]");
    } else {
        let channel = message.guild.channels.find(`name`, `appeal-${message.author.username.toLowerCase()}`);
        if (channel) {
            return message.reply("There's already an appeal channel opened by you.");
        } else {
            createChannel();
        }
    }

}

module.exports.help = {
    name: "appeal"
}