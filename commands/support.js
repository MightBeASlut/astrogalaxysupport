const Discord = require("discord.js")



module.exports.run = async (bot, message, args) => {
    let channel = message.channel;
    let cName = channel.name;
    if(!cName.startsWith("support")) { 
        message.reply("Alleen in <#448932698107674644> -help gebruiken aub!")
        .then(msg => {
            msg.delete(5000)
          })
    }
    if(cName.startsWith("support")) {

    const reason = message.content.split(" ").slice(1).join(" ");
    if (message.guild.channels.exists("name", `help-${message.author.username.toLowerCase()}`)) return message.channel.send(`Je hebt momenteel al een ticket open`);

    message.guild.createChannel(`help-${message.author.username}`, "text").then(c => {
        let category = message.guild.channels.find("name", "🎫 Tickets");
        if(category) {
            c.setParent(category)
             .then(updated => console.log(`Set the category of ${channel.name} to ${channel.parent.name}`))
            .catch(console.error);
           } else message.reply("Category niet vindbaar.")
           .then(msg => {
            msg.delete(5000)
          })
        let role = message.guild.roles.find("name", "Forest Support");
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

        let logs = message.guild.channels.find(`name`, "logs");
        if(!logs){
            logs = message.guild.createChannel("logs", "text");
        }

        let logsembed = new Discord.RichEmbed()
        .setColor("#ffffff")
        .addField(`Discord Console`,`${message.author} heeft een verboden woord(en) gebruikt!`)
        .setTimestamp()
        .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");

        let tcreateembed = new Discord.RichEmbed()
        .setTitle("ForestMC Ticket")
        .setColor(`#ffffff`)
        .addField(`Support Ticket`,`${c}`)
        .addField(`Hoe ga ik naar mijn support ticket?`, `Klik op ${c}`)
        .setTimestamp()
        .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png")
      
        logs.send(logsembed)
        message.channel.send({embed: tcreateembed});

        const embed = new Discord.RichEmbed()
        .setColor(`#ffffff`)
        .addField(`Hey ${message.author.username}!`, `Graag uw vraag stellen zodat wij z.s.m. kunnen antwoorden!`)
        .setTimestamp()
        .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png")
        c.send({ embed: embed });


    })



}
}

module.exports.help = {
	name: "help"
}
