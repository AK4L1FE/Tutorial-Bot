const discord = require('discord.js');
const client = new discord.Client();
const fs = require('fs');
const OwnerID = "309081957604786176";

const prefix = "gt!"


const newUsers = [];

client.on("ready", async () => {
  
  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
  client.user.setStatus('dnd');
  client.user.setPresence({ game: { name: `${client.user.username} is online on ${client.guilds.size} servers!`, type: 0} });
  
});

client.on('guildMemberAdd', (member, message, guild, name, server) => {
  const welcomechannel = message.guild.channels.find("name", "welcome");
  if (!welcomechannel) return;
  welcomechannel.sendMessage(`${member}, welcome to ${member.guild.name}!!! :laughing:`);
});

client.on('guildMemberRemove', async (member, guild, name, message) => {
  const welcomechannel = message.guild.channels.find("name", "welcome");
  if (!welcomechannel) return;
  welcomechannel.sendMessage(`Goodbye, ${member}, we will miss you. :slight_frown:`);
});

client.login('NDQ0Mzk0NjIzNDE5NTQ3NjQ4.DeIusw.wHLCw0fPFwg9xjBmbs4BGd769UI');
