const Discord = require('discord.js');
exports.run = (client, message, args) => {
 let say_msg = args.slice().join(" "); 
message.channel.send(say_msg);
  message.delete();
}
exports.help = {
  name: 'Say',
  description: 'Says stuff.'
}
