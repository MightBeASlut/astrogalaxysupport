const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member, guild, size) => {
    let channel = message.channel;
    let channelName = message.channel.name
    let prefix = "-";
    var msg = message.content;


    if (!channelName.startsWith(`bug-reports`)) {
        message.delete()
        message.channel.send(`You can only add bugs at <#452902979071377427>.`) 
        .then(msg => {
         msg.delete(5000)
       });
    }

    if (channelName.startsWith(`bug-reports`)) {
    var args = msg.split(" ")
    let bug = args.join(" ").slice(4);
    if (!args[1]) {
        message.delete()
        message.author.send("Usage: `-bug <bug>`").then(msg => {
            msg.delete(5000)
          });
    }
    if(!args[1]){
        return message.reply('Please specify the bug!').then(msg => {
            msg.delete(5000)
          });
        }
    if (args[1]) {
        message.delete()
    let arg = message.content.split(" ").slice(4);

    let bugEmbed = new Discord.RichEmbed()
    .setDescription(`Nieuwe bugreport van: ${message.author.username}`)
    .addField("Bug", `${bug}`)
    .setColor("#ffffff")
    .setTimestamp()
    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");

    message.delete()
    message.channel.send({embed: bugEmbed})

    let logs = message.guild.channels.find(`name`, "logs");
    let embed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField('Discord Console', `${message.author.username} heeft een nieuwe bug report gemaakt!`)
    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png")
    .setTimestamp()

    logs.sendEmbed(embed);
};
}
}

module.exports.help = {
  name: "bug"
}