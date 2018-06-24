const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let channel = message.channel;
    let cName = channel.name;
    if(cName.startsWith("appeal-") || cName.startsWith("apply-") || cName.startsWith("report-") || cName.startsWith("help-")) {

        let user = message.mentions.users.first();
        if(user) {

            let addembed = new Discord.RichEmbed()
            .setTitle("Speler Toegevoegd!")
            .setColor("#ffffff")
            .setDescription(`Naam: ${user}`)
            .setTimestamp()
            .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");
            message.delete()
            message.channel.send({embed: addembed});

        channel.overwritePermissions(user, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
} else message.channel.send("Graag een speler taggen!");
      } else message.reply("Dit werkt alleen in tickets channels.");

}

module.exports.help = {
    name: "add"
}
