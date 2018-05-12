const Discord = require('discord.js');
exports.run = (client, message, args) => {
  return message.reply('https://discordapp.com/api/oauth2/authorize?client_id=442306742571892736&permissions=8&scope=bot');
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'Sends the bot's invite link',
  usage: 'invite'
};
