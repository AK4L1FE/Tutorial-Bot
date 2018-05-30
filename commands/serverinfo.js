const Discord = require('discord.js');
exports.run = (client, message, args, guild) => {
message.channel.send(`**${guild.name}** ${guild.iconURL}\n\n**Members and Bots:**\n${guild.memberCount}\n\n**When it was created:**\n${guild.createdAt}\n\n**Owner:**\n@${guild.ownerID}\n\n**Verification level:**\n${guild.verificationLevel}\n\n**Region:**\n${guild.region}`);
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