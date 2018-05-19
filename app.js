const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();


const newUsers = [];

client.on("ready", (user, users, client) => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildCreate", (guild, user, client) => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", (guild, user, client) => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
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
