const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
    let messageArray = message.content.toLowerCase().split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let sort = args.join(" ");
    let channel = message.channel;

    if(args[0] !== "mute" && args[0] !== "ban" && args[0] !== "tempban"){
        return message.channel.send("Available appeals are: Ban, Mute, Tempban!\nUsage: -appeal [appeal sort]")
     }
     
    function createChannel() {
        message.guild.createChannel(`appeal-${message.author.username}`, "text").then(channel => {
        let category = message.guild.channels.find("name", "🎫 Tickets");
        if(category) {
            channel.setParent(category)
             .then(updated => console.log(`Set the category of ${channel.name} to ${channel.parent.name}`))
            .catch(console.error);
           } else message.reply("Category niet vindbaar.")
           .then(msg => {
            msg.delete(5000)
          })
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
            .setColor("#ffffff")
            .addField(`${sort} Appeal Ticket`,`${channel}`)
            .addField(`War is mijn appeal ticket?`, `Klik op ${channel}`)
            .setTimestamp()
            .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");
          
            message.channel.send({embed: tcreateembed});

            if (args[0] == "ban") {
                let appealone = new Discord.RichEmbed()
                    .setColor("#ffffff")
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`
                    ** »Dit is het formaat voor uw appeal. Als u in appeal gaat, verwachten we dat u al deze vragen zult beantwoorden. «** \n \n- Wat is de naam van uw Minecraft IGN? \n- Waarom bent u uit ForestMC verbannen? \n- Wie heeft u verbannen? \n- je bent verbannen voor meerdere waarschuwingen, waarom zouden we je unbannen? \n- Als je verbannen werd voor hacken, waarom zouden we je uitbannen? \n- Als je om een andere reden bent gebanned, vertel ons dan waarom we je moeten ontbinden?\n
- Als u hackt, heeft u uw hacks dan gedeïnstalleerd? \n- Hebt u ooit gedoneerd op de server, zo ja, wat heeft u gekocht? \n- Bent u ooit eerder gestraft op de server? \n
- Bent u ooit eerder personeel op de server geweest, zo ja, in welke rank was je? \n- Is er nog iets dat we moeten weten?`)
                    .setTimestamp()
                    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");
                channel.send({embed: appealone});
            }

            if (args[0] == "tempban") {
                let appealtwo = new Discord.RichEmbed()
                    .setColor("#ffffff")
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`
             ** »Dit is het formaat voor uw appeal. Wanneer u in appeal gaat, verwachten we dat u al deze vragen zult beantwoorden. «** \n \n- Wat is de naam van uw Minecraft IGN? \n
- Hoe lang bent u tijdelijk verbannen? \n- Waarom was u tijdelijk verbannen op ForestMC? \n- Wie heeft je tijdelijk verbannen? \n
- Als je voor meerdere delicten tijdelijk bent geblokkeerd, waarom zouden we je uitbannen? \n- Heb je ooit gedoneerd op de server, zo ja, wat heb je gekocht ? \n- Bent u ooit eerder op de server gestraft? \n- Bent u ooit eerder personeel op de server geweest, zo ja, in welke rang was u? \n- Is er nog iets dat we moeten weten? \n`)
                    .setTimestamp()
                    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");
                channel.send({embed: appealtwo});
            }

            if (args[0] == "mute") {
                let appealthree = new Discord.RichEmbed()
                    .setColor("#ffffff")
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`
** »Dit is het formaat voor uw appeal. Wanneer u in appeal gaat, verwachten we dat u al deze vragen zult beantwoorden. «** \n \n
- Wat is de naam van uw Minecraft IGN? \n- Waarom was u gemuted op ForestMC? \n- Wie heeft u gemuted, Als je het niet weet laat je het leeg)? \n- Als u gemuted bent voor meerdere keren, waarom zouden we u dan unmuten? \n- Heeft u ooit gedoneerd op de server, zo ja, wat heeft u gekocht? \n- Hebt u ooit eerder gestraft op de server? \n- Bent u ooit eerder personeel op de server geweest, zo ja, in welke rang was u? \n- Is er nog iets dat we moeten weten? \n
                    `)
                    .setTimestamp()
                    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");
                channel.send({embed: appealthree});
            }
        });
    }


    if (!sort) {
        return message.reply("Verkeerde usage: -appeal [appeal category]");
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
