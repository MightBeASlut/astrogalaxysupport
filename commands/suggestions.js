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
    if (!args[1]) return message.channel.send("`You have to provide a message for me to say!`");
    let arg = message.content.split(" ").slice(10);

    let suggestionEmbed = new Discord.RichEmbed()
    .setAuthor("AstroGalaxy Suggestion!")
    .setColor(0xCF40FA)
    .setDescription(`${suggestion} Suggested by ${message.author.username}`)
    .setTimestamp()
    .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");

    message.delete()
    message.channel.send({embed: suggestionEmbed})
    .then(function (message) {
        message.react("✅")
        message.react("❌")
    }).catch(function() {})
};
}

module.exports.help = {
  name: "suggest"
}