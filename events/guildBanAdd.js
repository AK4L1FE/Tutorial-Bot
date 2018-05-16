const Discord = require('discord.js');
let welcomechannel = message.guild.channels.find(`name`, "welcome_leave");
module.exports = async (guild, message, user) => {
  welcomechannel.send(`${user.username} was just banned!`);
};
