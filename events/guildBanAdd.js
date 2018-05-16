const Discord = require('discord.js');
module.exports = async (guild, message, user) => {
  let welcomechannel = message.guild.channels.find(`name`, "welcome_leave");
  welcomechannel.send(`${user.username} was just banned!`);
};
