const Discord = require('discord.js');
exports.run = (client, guild, message, args, name) => {
return message.reply(`Name: ${guild.name}n\Owner: ${guild.ownerID}n\Icon: ${guild.icon}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Says the server\'s information.',
  usage: 'serverinfo'
};
