const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the kick.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('I cannot kick that member');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'kick')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);

    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("Can't find a mod-log channel.");

    incidentchannel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Kicks the mentioned user, needing to have a mod-log channel',
  usage: 'kick [mention] [reason]'
};
