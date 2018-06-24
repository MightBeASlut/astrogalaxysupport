const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let channel = message.channel;
    let cName = channel.name;
    if(cName.startsWith("appeal-") || cName.startsWith("apply-") || cName.startsWith("report-") || cName.startsWith("help-")) {

        let user = message.mentions.users.first();
        if(user) {

            let addembed = new Discord.RichEmbed()
            .setTitle("Speler Verwijderd!")
            .setColor("#ff0000")
            .setDescription(`Naam: ${user}`)
            .setTimestamp()
            .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");
            
            message.delete()
            message.channel.send({embed: addembed});

        channel.overwritePermissions(user, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
} else message.channel.send("Je moet een speler taggen!");
      } else message.reply("Dit werkt alleen in tickets.");

}

module.exports.help = {
    name: "remove"
}
