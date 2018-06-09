const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
    let messageArray = message.content.toLowerCase().split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let rank = args.join(" ");

    if(args[0] !== "helper" && args[0] !== "moderator" && args[0] !== "developer" &&
     args[0] !== "mod" && args[0] !== "dev" && args[0] !== "youtuber" && args[0] !== "youtube" && args[0] !== "builder"
     && args[0] !== "build"){
        return message.channel.send("Available ranks are: Helper, Moderator, Builder, YouTuber, Developer!\n Usage: -apply [rank here]")
     }
     
    function createChannel() {
        message.guild.createChannel(`apply-${message.author.username}`, "text").then(channel => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            let manager = message.guild.roles.find("name", "Manager");
            let owner = message.guild.roles.find("name", "Owner");
            channel.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                READ_MESSAGE_HISTORY: true
            });

            channel.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false,
                READ_MESSAGE_HISTORY: false
            });
            channel.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                READ_MESSAGE_HISTORY: true
            });
            channel.overwritePermissions(manager, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                READ_MESSAGE_HISTORY: true
            });
            channel.overwritePermissions(owner, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                READ_MESSAGE_HISTORY: true
            });

            let tcreateembed = new Discord.RichEmbed()
            .setTitle("AstroGalaxy Support")
            .setColor(0xCF40FA)
            .addField(`Application Ticket`,`${channel}`)
            .addField(`How can I go to my apply ticket?`, `Click on ${channel}`)
            .addField(`Applying for:`, rank)
            .setTimestamp()
            .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
          
            message.channel.send({embed: tcreateembed});

            if (args[0].toLowerCase() == "helper") {
                let helperEmbed = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`
                    **»This is the format for your application. When you are applying, we expect you to answer all these questions.«**\n\n- How old are you?\n- What is your Minecraft IGN name?\n- What is your real name?\n- In which country do you live?\n- How many languages do you speak?\n- Which languages do you speak?\n- Are you able to record // show proof of rule breakers?\n- Do you have a working microphone? If yes, are you willing to talk to people using that Microphone?\n- Why do you want to be staff on our server?\n- Why do you think we should accept you as a staff on our server?\n- Have you ever been punished on any server? If yes, why have you been punished?\n- Have you ever applied on our server? If yes, why were you rejected // why were you demoted?\n- Have you ever donated on our server? If yes, (for) what did you donate?\n- How many hours can you contribute to our server?\n- Do you have experience with being a staff member?\n- What can you offer for our server?\n- Is there anything else we should know?\n\n\n**»SCENARIO'S«**\n\n - Someone is saying bad stuff about another offline staff member. What do you do?\n\n- Someone is constantly joining on new alts. What do you do?\n\n- You caught a Staff member hacking // abusing. What do you do?\n\n- A player is hacking. What do you do?\n\n- A player is spamming constantly, what do you do?\n\n`)
                    .setTimestamp()
                    .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
                channel.send({embed: helperEmbed});
            }

            if (args[0].toLowerCase() == "moderator") {
                let moderatorEmbed = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`
                    **»This is the format for your application. When you are applying, we expect you to answer all these questions.«**\n\n- How old are you?\n- What is your Minecraft IGN name?\n- What is your real name?\n- In which country do you live?\n- How many languages do you speak?\n- Which languages do you speak?\n- Are you able to record // show proof of rule breakers?\n- Do you have a working microphone? If yes, are you willing to talk to people using that Microphone?\n- Why do you want to be staff on our server?\n- Why do you think we should accept you as a staff on our server?\n- Have you ever been punished on any server? If yes, why have you been punished?\n- Have you ever applied on our server? If yes, why were you rejected // why were you demoted?\n- Have you ever donated on our server? If yes, (for) what did you donate?\n- How many hours can you contribute to our server?\n- Do you have experience with being a staff member?\n- What can you offer for our server?\n- Is there anything else we should know?\n\n\n**»SCENARIO'S«**\n\n - Someone is saying bad stuff about another offline staff member. What do you do?\n\n- Someone is constantly joining on new alts. What do you do?\n\n- You caught a Staff member hacking // abusing. What do you do?\n\n- A player is hacking. What do you do?\n\n- A player is spamming constantly, what do you do?\n\n`)
                    .setTimestamp()
                    .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
                channel.send({embed: moderatorEmbed});
            }

            if (args[0].toLowerCase() == "mod") {
                let moderatorEmbed = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`
                    **»This is the format for your application. When you are applying, we expect you to answer all these questions.«**\n\n- How old are you?\n- What is your Minecraft IGN name?\n- What is your real name?\n- In which country do you live?\n- How many languages do you speak?\n- Which languages do you speak?\n- Are you able to record // show proof of rule breakers?\n- Do you have a working microphone? If yes, are you willing to talk to people using that Microphone?\n- Why do you want to be staff on our server?\n- Why do you think we should accept you as a staff on our server?\n- Have you ever been punished on any server? If yes, why have you been punished?\n- Have you ever applied on our server? If yes, why were you rejected // why were you demoted?\n- Have you ever donated on our server? If yes, (for) what did you donate?\n- How many hours can you contribute to our server?\n- Do you have experience with being a staff member?\n- What can you offer for our server?\n- Is there anything else we should know?\n\n\n**»SCENARIO'S«**\n\n - Someone is saying bad stuff about another offline staff member. What do you do?\n\n- Someone is constantly joining on new alts. What do you do?\n\n- You caught a Staff member hacking // abusing. What do you do?\n\n- A player is hacking. What do you do?\n\n- A player is spamming constantly, what do you do?\n\n`)
                    .setTimestamp()
                    .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
                channel.send({embed: moderatorEmbed});
            }

            if (args[0].toLowerCase() == "developer") {
                let devEmbed = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`
                    **»This is the format for your application. When you are applying, we expect you to answer all these questions.«**\n\n- How old are you?\n- What is your Minecraft IGN name?\n- What is your real name?\n- In which country do you live?\n- How many languages do you speak?\n- Which languages do you speak?\n- How long have you been coding for?\n- Do you have a working microphone? If yes, are you willing to talk to people using that Microphone?\n- Why do you want to be a developer on our server?\n- Why do you think we should accept you as a developer on our server?\n- Do you have a portfolio, if so, please send it?\n- Have you ever applied on our server? If yes, why were you rejected // why were you demoted?\n- Have you ever donated on our server? If yes, (for) what did you donate?\n- How many hours can you contribute to our server?\n- Do you have experience with working for long hours?\n- Can you send us an example of a plugin/config you've made?\n- What can you offer for our server?\n- Is there anything else we should know? \n\n**»SCENARIO'S«**\n\n- You are asked to make a /wild plugin. How would you do it?\n- There are several errors in console. You do not know how to fix them, what would you do?\n- The server is crashing constantly. What would you do?\n- The server is lagging constantly. What would you do?\n- A player is swearing at you, and asking if you code. What would you do?\n`)
                    .setTimestamp()
                    .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
                channel.send({embed: devEmbed});
            }

            if (args[0].toLowerCase() == "dev") {
                let devsEmbed = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`
                    **»This is the format for your application. When you are applying, we expect you to answer all these questions.«**\n\n- How old are you?\n- What is your Minecraft IGN name?\n- What is your real name?\n- In which country do you live?\n- How many languages do you speak?\n- Which languages do you speak?\n- How long have you been coding for?\n- Do you have a working microphone? If yes, are you willing to talk to people using that Microphone?\n- Why do you want to be a developer on our server?\n- Why do you think we should accept you as a developer on our server?\n- Do you have a portfolio, if so, please send it?\n- Have you ever applied on our server? If yes, why were you rejected // why were you demoted?\n- Have you ever donated on our server? If yes, (for) what did you donate?\n- How many hours can you contribute to our server?\n- Do you have experience with working for long hours?\n- Can you send us an example of a plugin/config you've made?\n- What can you offer for our server?\n- Is there anything else we should know? \n\n**»SCENARIO'S«**\n\n- You are asked to make a /wild plugin. How would you do it?\n- There are several errors in console. You do not know how to fix them, what would you do?\n- The server is crashing constantly. What would you do?\n- The server is lagging constantly. What would you do?\n- A player is swearing at you, and asking if you code. What would you do?\n`)
                    .setTimestamp()
                    .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
                channel.send({embed: devsEmbed});
            }


            if (args[0].toLowerCase() == "youtuber") {
                let youtubeembed = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`
                    **»This is the format for your application (youtuber). When you are applying, we expect you to answer all these questions.«**\n\n- How old are you?\n- What is your Minecraft IGN name?\n- What is your real name?\n- What is your timezone?\n- Which language do you speak in your videos?\n- What is your channel link?\n- Will you ever live stream on the server?\n- How often is your view count on each video?\n- How many subscribers do you have?\n- How often will you stream on the server?\n- How often will you upload videos on the server?\n- Have you ever applied on our server? If yes, why were you rejected // why were you demoted?\n- Have you ever donated on our server? If yes, (for) what did you donate?\n- What can you offer for our server?\n- Is there anything else we should know?\n\n**»Requirements«**\n\n- You must have at least 500 subscribers.\n- You must have at least 100 views for 10 videos.\n- You must post at least 3 times a month (will be checked).\n`)
                    .setTimestamp()
                    .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
                channel.send({embed: youtubeembed});
            }

            if (args[0].toLowerCase() == "youtube") {
                let youtuberembed = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`
                    **»This is the format for your application (youtuber). When you are applying, we expect you to answer all these questions.«**\n\n- How old are you?\n- What is your Minecraft IGN name?\n- What is your real name?\n- What is your timezone?\n- Which language do you speak in your videos?\n- What is your channel link?\n- Will you ever live stream on the server?\n- How often is your view count on each video?\n- How many subscribers do you have?\n- How often will you stream on the server?\n- How often will you upload videos on the server?\n- Have you ever applied on our server? If yes, why were you rejected // why were you demoted?\n- Have you ever donated on our server? If yes, (for) what did you donate?\n- What can you offer for our server?\n- Is there anything else we should know?\n\n**»Requirements«**\n\n- You must have at least 500 subscribers.\n- You must have at least 100 views for 10 videos.\n- You must post at least 3 times a month (will be checked).\n`)
                    .setTimestamp()
                    .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
                channel.send({embed: youtuberembed});
            }

            if (args[0].toLowerCase() == "builder") {
                let builderembed = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`
                    **»This is the format for your application. When you are applying, we expect you to answer all these questions.«**\n\n- How old are you?\n- What is your Minecraft IGN name?\n- What is your real name?\n- In which country do you live?\n- How many languages do you speak?\n- Which languages do you speak?\n- How long have you been building for?\n- Do you have a working microphone? If yes, are you willing to talk to people using that Microphone?\n- Why do you want to be a builder on our server?\n- Why do you think we should accept you as a builder on our server?\n- Please send us some past work/builds you've made/been working on.\n- Have you ever applied on our server? If yes, why were you rejected // why were you demoted?\n- Have you ever donated on our server? If yes, (for) what did you donate?\n- How many hours can you contribute to our server?\n- Do you have experience with working for long hours?\n- Can you build something for us as a test?\n- What can you offer for our server?\n- Is there anything else we should know?\n\n**»SCENARIO'S«**\n\n- A player is dissing your builds. What do you do?\n- You are assigned a build too complex for you. What do you do?\n- Another builder is being rude to you. What do you do?\n- The server crashes and you lose some of your buld. What would you do/how would you react?\n- "Your build isn't good enough" (said by a staff member/other builder). How would you react?`)
                    .setTimestamp()
                    .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
                channel.send({embed: builderembed});
            }

            if (args[0].toLowerCase() == "build") {
                let buildembed = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .setTitle(`Hey ${message.author.username}!`)
                    .setDescription(`
                    **»This is the format for your application. When you are applying, we expect you to answer all these questions.«**\n\n- How old are you?\n- What is your Minecraft IGN name?\n- What is your real name?\n- In which country do you live?\n- How many languages do you speak?\n- Which languages do you speak?\n- How long have you been building for?\n- Do you have a working microphone? If yes, are you willing to talk to people using that Microphone?\n- Why do you want to be a builder on our server?\n- Why do you think we should accept you as a builder on our server?\n- Please send us some past work/builds you've made/been working on.\n- Have you ever applied on our server? If yes, why were you rejected // why were you demoted?\n- Have you ever donated on our server? If yes, (for) what did you donate?\n- How many hours can you contribute to our server?\n- Do you have experience with working for long hours?\n- Can you build something for us as a test?\n- What can you offer for our server?\n- Is there anything else we should know?\n\n**»SCENARIO'S«**\n\n- A player is dissing your builds. What do you do?\n- You are assigned a build too complex for you. What do you do?\n- Another builder is being rude to you. What do you do?\n- The server crashes and you lose some of your buld. What would you do/how would you react?\n- "Your build isn't good enough" (said by a staff member/other builder). How would you react?`)
                    .setTimestamp()
                    .setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");
                channel.send({embed: buildembed});
            }

        });
    }

    if (!rank) {
        return message.reply("Invalid usage: -apply [rank here]");
    } else {
        let channel = message.guild.channels.find(`name`, `apply-${message.author.username.toLowerCase()}`);
        if (channel) {
            return message.reply("There's already an application channel opened by you.");
        } else {
            createChannel();
        }
    }

}

module.exports.help = {
    name: "apply"
}