const Discord = require('discord.js');
exports.run = (client, message, args) => {
 let say_msg = args.slice().join(" "); 
message.channel.send(say_msg);
  message.delete();
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Says what you type in.',
  usage: 'say {message}'
}
