const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member, guild, size) => {
    let channel = message.channel;
    let channelName = message.channel.name
    let prefix = "-";
    var msg = message.content;


    if (!channelName.startsWith(`suggestions`)) {
        message.delete()
        message.channel.send(`You can only add suggestions in the suggestions channel.`) 
        .then(msg => {
         msg.delete(5000)
       });
    }

    if (channelName.startsWith(`suggestions`)) {
    var args = msg.split(" ")
    let suggestion = args.join(" ").slice(9);
    if (!args[1]) {
        message.delete()
        message.author.send("Correct usage: -suggest *suggestion here*");
    }
    if (args[1]) {
        message.delete()
    let arg = message.content.split(" ").slice(10);

    let suggestionEmbed = new Discord.RichEmbed()
    .setDescription(`Nieuwe suggestie van: ${message.author}`)
    .addField("Suggestie", `${suggestion}`)
    .setColor("#ffffff")
    .setTimestamp()
    .setFooter(`©ForestMC`, "https://imgur.com/04b2xVG.png");

    message.delete()
    message.channel.send({embed: suggestionEmbed}).then(async function (message) {
		await message.react("✅")
		await message.react("❌")
    }).catch(function() {})

    let logs = message.guild.channels.find(`name`, "logs");
    let embed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField('Discord Console', `${message.author} heeft een nieuwe suggestie gemaakt!`)
    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png")
    .setTimestamp()

    logs.sendEmbed(embed);
    
};
}
}

module.exports.help = {
  name: "suggest"
}