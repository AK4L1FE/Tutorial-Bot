const Discord = require('discord.js');
exports.run = (client, message, args, guild) => {
message.channel.send(`**${message.guild.name}** ${message.guild.iconURL}\n\n**Members and Bots:**\n${message.guild.memberCount}\n\n**When it was created:**\n${message.guild.createdAt}\n\n**Owner:**\n@${message.guild.ownerID}\n\n**Verification level:**\n${message.guild.verificationLevel}\n\n**Region:**\n${message.guild.region}`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Displays the servers information.(Currently not working)',
  usage: 'serverinfo'
}
