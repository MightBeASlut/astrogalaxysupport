const Discord = require("discord.js")



module.exports.run = async (bot, message, args) => {
    let channel = message.guild.channels.find(`name`, `bug-${message.author.username.toLowerCase()}`);

    const reason = message.content.split(" ").slice(1).join(" ");
    if (message.guild.channels.exists("name", `bug-${message.author.username.toLowerCase()}`)) return message.channel.send(`You already have a ticket open.`);

    message.guild.createChannel(`bug-${message.author.username}`, "text").then(c => {
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
        let mod = message.guild.roles.find("name", "Moderator");
        let srmods = message.guild.roles.find("name", "Senior Moderator");
        let dev = message.guild.roles.find("name", "Developer");
        let admin = message.guild.roles.find("name", "Admin");
        let manager = message.guild.roles.find("name", "Manager");
        let owner = message.guild.roles.find("name", "Owner");


        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });

        c.overwritePermissions(mod, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(srmods, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(admin, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(manager, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(owner, {
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
        .addField(`Bug Ticket`,`${c}`)
        .addField(`How can I go to my bug ticket?`, `Click on ${c}`)
        .setTimestamp()
        .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");

        let bug = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .setTitle(`Hey ${message.author.username}!`)
        .setDescription(`
        **»This is the format for your bug-report. When you are reporting a bug we expect you to answer all these questions.«**\n\n- What is the bug?\n- What does the bug do exactly?\n\nPlease describe the bug as much as you can!\n- Is there anything else we should know about the bug?`)
        .setTimestamp()
        .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
      
        message.channel.send({embed: tcreateembed});
        c.send({embed: bug});


    })
}

module.exports.help = {
	name: "bug"
}