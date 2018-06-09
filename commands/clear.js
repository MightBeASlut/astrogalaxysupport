const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  // Command is !clear <Number that's less than 100 and greater than 0.

  let infuperms = new Discord.RichEmbed()
  .setColor("#ffffff")
  .addField(`ForestMC Error`,`${message.author} niet voldoende permissions!`)
  .setTimestamp()
  .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");

  let nanembed = new Discord.RichEmbed()
  .setColor("#ffffff")
  .addField(`ForestMC Error`,`${message.author} graag een nummer hoeveel je wilt verwijderen!`)
  .setTimestamp()
  .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");

  let argsembed = new Discord.RichEmbed()
  .setColor("#ffffff")
  .addField(`ForestMC Error`,`${message.author} Graag minder dan 100 berichten!`)
  .setTimestamp()
  .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(infuperms).then(msg => {
    msg.delete(5000)
  });
  if(message.member.hasPermission("MANAGE_MESSAGES")) {
    if (isNaN(args[0])) return message.channel.send(nanembed).then(msg => {
        msg.delete(5000)
      });
    if (args[0] > 100) return message.channel.send(argsembed).then(msg => {
        msg.delete(5000)
      });
  
    // Nu verzenden we de log embed
    let logs = message.guild.channels.find('name', 'logs');

    let logsembed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField(`Discord Console`,`${message.author} heeft ${args[0]} berichten verwijderd!`)
    .setTimestamp()
    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");

    
    message.channel.bulkDelete(args[0])
      .then(messages => logs.send(logsembed));
}
}
module.exports.help = {
  name: "clear"
}