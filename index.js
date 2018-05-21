
const fs = require("fs")
const botconfig = require("./botconfig.json")
const Discord = require("discord.js")
const bot = new Discord.Client({fetchAllMembers: true})




bot.commands = new Discord.Collection()
let prefix = botconfig.prefix



fs.readdir("./commands/", (err, files) => {
	if(err) console.log(err) 

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0) {
		console.log("Couldn't find commands folder.")
		return
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`)
		console.log(`${i + 1}: ${f} loaded!`)
		bot.commands.set(props.help.name,props)
	})

})


bot.on("ready", async () => {
	console.log(`${bot.user.username} is online!`)
	
})

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
        let welcomekid = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hello ${member.user.username}! Welcome to the AstroGalaxy discord server!`, `How can you connect to our minecraft server?\n\nYou can connect with:\n- mc.astrogalaxy.net\n- play.astrogalaxy.net\n- astrogalaxy.net\n\nIn our discord server, we will keep you updated with the server news, all the updates and the announcements!\n\nYou will be able to listen to music, recruit faction members, apply for staff, create player/bug reports, chat with people and make discussions!\n\nIf you have any questions, first look in the #how-to channel or the <#448166198375350275> channel!\n\nWe hope you enjoy our forums alternative!\n\nEnjoy,\nThe AstroGalaxy Team.`)
		.setTimestamp()
		.setFooter(`©AstroGalaxy`, "https://i.imgur.com/E5x69Sn.png");

        member.send(welcomekid);
});

bot.on("message", async message => {

	if(message.channel.name === "suggestions") {
        if(message.author.bot) return;
        if(!message.content.includes(`${prefix}suggest`)) {
            message.delete()
            message.author.send("Only use -suggest in the suggestions channel!");
        }
    }
	

	if (!message.content.startsWith(prefix)) return


	let messageArray = message.content.split(" ")
	let cmd = messageArray[0]
	let args = messageArray.slice(1)
	let commandFile = bot.commands.get(cmd.slice(prefix.length))
	if(commandFile) commandFile.run(bot, message, args)




})



bot.login(process.env.BOT_TOKEN);
