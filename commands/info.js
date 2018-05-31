const Discord = require('discord.js');
exports.run = (clientUser, message, args) => {
message.channel.send(`**Z-Mod**\n${clientUser.user.displayAvatarURL}\n\n**Version**\n1.0.2\n\n**Created at:**\n${clientUser.user.createdAt}\n\n**Library:**\ndiscord.js\n\n**Creator:**\n@AK4L1FE#4246\n\n**Invite to Support:**\nhttps://discord.gg/HsawkcD\n\n**Donate to my creator:**\nhttps://www.patreon.com/user?u=11509428`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'info',
  description: 'Displays Z-Mod\'s information.',
  usage: 'info'
};
