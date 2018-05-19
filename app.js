const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();


const newUsers = [];

client.on("ready", () => {
  console.log("I am ready!");
});

client.on('guildMemberAdd', (member, guild) => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`Welcome to ${guild.name}, ${member}`);
});

client.on('guildMemberRemove', (member, guild) => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`Goodbye, ${member}, we will miss you`);
});

client.login('NDQyNzQ0MjIzMjAxMDk5Nzc3.DeGOKA.yFpFReKWxCdIGEY-CD0rnyG2h7o');
