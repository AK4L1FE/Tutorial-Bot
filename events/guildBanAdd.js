const Discord = require('discord.js');
let welcomechannel = message.guild.channels.find(`name`, "welcome_leave");

module.exports = (guild, user) => {
  welcomechannel.send(`${user.username} was just banned!`);
  
};
