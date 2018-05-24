const Discord = require('discord.js');
exports.run = (client, message, args) => {
 let say_msg = args.slice().join(" ");
message.channel.send(`@everyone`, say_msg);
  message.delete();
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'announce',
  description: 'Mentions everyone and says what you type in.',
  usage: 'announce {message}'
}
