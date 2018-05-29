const Discord = require('discord.js');
exports.run = (client, message, args) => {
message.channel.send(`**Z-Mod's Stats**\n\n**Users:**\n${client.users.size}\n\n**Channels:**\n${client.channels.size}\n\n**Servers:**\n${client.guilds.size}`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'stats',
  description: 'Says the users, channels and servers Z-Mod is serving.',
  usage: 'stats'
}
