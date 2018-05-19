const Discord = require("discord.js");
const client = new Discord.Client();
const OwnerID = "309081957604786176";

const prefix = "gt!"


const newUsers = [];

client.on("ready", (user, client, bot) => {
  console.log(`Bot has started.`);
});

client.on('guildMemberAdd', (member, guild, name, server) => {
  const cchannel = member.guild.channels.find('name', 'welcome');
  if (!cchannel) return;
  cchannel.sendMessage(`${member}, welcome to ${member.guild.name}!!! :laughing:`);
});

client.on('guildMemberRemove', (member, guild, name) => {
  const cchannel = member.guild.channels.find('name', 'welcome');
  if (!cchannel) return;
  cchannel.sendMessage(`Goodbye, ${member}, we will miss you. :slight_frown:`);
});

client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);
	
	if (command === "ping") {
		message.channel.send(`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`);
	} else

	if (command === "say") {
		message.delete()
		message.channel.send(args.join(" "));
	} else

	if (command == "help") {
		message.channel.send("Command List: gt!help: Will give the current command list; gt!ping: WIll show the ping time for the bot; gt!say [text]: Will make the bot say something; gt!announcement [text]: Will make the bot say an announcement and tag everyone.")
	}

});

client.login('NDQ0Mzk0NjIzNDE5NTQ3NjQ4.DeIusw.wHLCw0fPFwg9xjBmbs4BGd769UI');
