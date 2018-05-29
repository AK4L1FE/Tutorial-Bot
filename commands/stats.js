const Discord = require('discord.js');
const bot = new Discord.Client();
exports.run = (client, message, args, bot) => {
message.channel.send(`**Z-mod's Stats**\n\n**Users:**\n${bot.users.size}\n\n**Channels:**\n${bot.channels.size}\n\n**Servers:**\n${bot.guilds.size}`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'stats',
  description: 'Says the users, channels and servers Z-Mod is serving',
  usage: 'stats'
}
