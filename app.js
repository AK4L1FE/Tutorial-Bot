const Discord = require('discord.js');
const client Discord.Client();
const fs = require('fs');
const db = require('quick.db');
const OwnerID = "309081957604786176";

const prefix = "gt!"


const newUsers = [];

client.on("ready", async () => {
  
  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
  client.user.setStatus('dnd');
  client.user.setPresence({ game: { name: `${client.user.username} is online on ${client.guilds.size} servers!`, type: 0} });
  
});

client.on('guildMemberAdd', (member, message, guild, name, server) => {
  const welcomechannel = require("setchannel.js");
  if (!welcomechannel) return;
  welcomechannel.sendMessage(`${member}, welcome to ${member.guild.name}!!! :laughing:`);
});

client.on('guildMemberRemove', (member, guild, name) => {
  const welcomechannel = require("setchannel.js");
  if (!welcomechannel) return;
  welcomechannel.sendMessage(`Goodbye, ${member}, we will miss you. :slight_frown:`);
});

client.login('NDQ0Mzk0NjIzNDE5NTQ3NjQ4.DeIusw.wHLCw0fPFwg9xjBmbs4BGd769UI');
