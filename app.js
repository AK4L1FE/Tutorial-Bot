const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();


const newUsers = [];

client.on("ready", () => {
  console.log("I am ready!");
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
