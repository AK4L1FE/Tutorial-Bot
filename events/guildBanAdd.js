const Discord = require('discord.js');
module.exports = (client, message, user, args) => {
  let welcomechannel = guild.channels.find(`name`, "welcome_leave");
  welcomechannel.send(`${user.username} was just banned!`);
};
