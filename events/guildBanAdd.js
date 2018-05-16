const Discord = require('discord.js');
module.exports = async (client, message, user, args) => {
  let welcomechannel = message.guild.channels.find(`name`, "welcome_leave");
  welcomechannel.send(`${user.username} was just banned!`);
};
