const Discord = require("discord.js")



module.exports.run = async (bot, message, args) => {

    const reason = message.content.split(" ").slice(1).join(" ");
    if (message.guild.channels.exists("name", `support-${message.author.username.toLowerCase()}`)) return message.channel.send(`You already have a support ticket open.`);

    message.guild.createChannel(`support-${message.author.username}`, "text").then(c => {
        let category = message.guild.channels.find("name", "Tickets");
        if(category) {
            c.setParent(category)
             .then(updated => console.log(`Set the category of ${channel.name} to ${channel.parent.name}`))
            .catch(console.error);
           } else message.reply("Category could not be found.")
           .then(msg => {
            msg.delete(5000)
          })
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");


        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });

        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });

        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });

        let tcreateembed = new Discord.RichEmbed()
        .setTitle("AstroGalaxy Support")
        .setColor(0xCF40FA)
        .addField(`Support Ticket`,`${c}`)
        .addField(`How can I go to my support ticket?`, `Click on ${c}`)
        .setTimestamp()
        .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
      
        message.channel.send({embed: tcreateembed});

        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `What is your question/problem?`)
        .setTimestamp()
        .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
        c.send({ embed: embed });

    })



    
}

module.exports.help = {
	name: "help"
}