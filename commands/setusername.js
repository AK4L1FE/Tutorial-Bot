const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args, user) => {
 let say_msg = args.slice().join(" ");

 client.user.setUsername(say_msg);
 message.channel.send(" Username set successfully!!! ");

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setusername',
  description: 'Sets the bots username,can only be used by the owner.',
  usage: 'setusername {message}'
};
