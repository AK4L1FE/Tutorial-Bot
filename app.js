const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();


const newUsers = [];

bot.on("ready", (user, bot) => {
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on("guildCreate", (guild, user, bot) => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on("guildDelete", (guild, user, bot) => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

client.on('guildMemberAdd', (member, guild, name, server) => {
  const cchannel = member.guild.channels.find('name', 'welcome');
  if (!cchannel) return;
  cchannel.sendMessage(`Welcome to ${server}, ${member}`);
});

client.on('guildMemberRemove', (member, guild, name) => {
  const cchannel = member.guild.channels.find('name', 'welcome');
  if (!cchannel) return;
  cchannel.sendMessage(`Goodbye, ${member}, we will miss you`);
});

client.login('NDQyNzQ0MjIzMjAxMDk5Nzc3.DeGOKA.yFpFReKWxCdIGEY-CD0rnyG2h7o');
