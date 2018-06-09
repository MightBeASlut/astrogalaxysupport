const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member, guild, size) => {

    let infuperms = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField(`ForestMC Error`,`${message.author} niet voldoende permissions!`)
    .setTimestamp()
    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(infuperms);
    if (message.author.bot) return;
    if (message.member.hasPermission("ADMINISTRATOR")) {

    var msg = message.content;
    var args = msg.split(" ")
    if (!args[1]) return message.channel.send("`What is your new changelog?`");
    let arg = message.content.split(" ").slice(10);

    let changelog = message.guild.channels.find('name', 'changelogs');

    let announcement = new Discord.RichEmbed()
    .setAuthor("ForestMC Changelogs")
    .setColor("#ffffff")
    .setDescription("➕" + args.join(" ").slice(10))
    .setTimestamp()
    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");

    changelog.send(announcement);

    let logs = message.guild.channels.find(`name`, "logs");
    let embed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField('Discord Console', `${message.author.username} heeft een nieuwe changelog toegevoegd!`)
    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png")
    .setTimestamp()

    logs.sendEmbed(embed);
}

};

module.exports.help = {
  name: "changelog"
}