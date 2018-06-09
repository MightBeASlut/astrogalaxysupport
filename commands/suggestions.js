const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   let suggestion = args.join(" ");
   if(message.channel.id !== "449924263659438090") return message.channel.send("Wrong channel");
  if(!args[0] || args[0] === "help") return message.channel.send(" -suggestion <suggestion>");

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

    let logs = message.guild.channels.find("name", "logs");
    let embed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField('Discord Console', `${message.author} heeft een nieuwe suggestie gemaakt!`)
    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png")
    .setTimestamp();

    logs.sendEmbed(embed);

};


module.exports.help = {
  name: "suggest"
}
