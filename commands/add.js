const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let channel = message.channel;
    let cName = channel.name;
    if(cName.startsWith("appeal-") || cName.startsWith("apply-") || cName.startsWith("report-") || cName.startsWith("support-")) {

        let user = message.mentions.users.first();
        if(user) {

            let addembed = new Discord.RichEmbed()
            .setTitle("User Added!")
            .setColor("#00ff00")
            .setDescription(`Name: ${user}`)
            .setTimestamp()
            .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
            message.delete()
            message.channel.send({embed: addembed});

        channel.overwritePermissions(user, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
} else message.channel.send("You need to tag a user to add them to this ticket.");
      } else message.reply("You can't execute this command outside a ticket channel.");

}

module.exports.help = {
    name: "add"
}