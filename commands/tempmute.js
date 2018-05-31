const Discord = require('discord.js');
const ms = require('ms');
exports.run = (client, message, args, params, setTimeout, ms) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  let muteRole = message.guild.roles.find('name', 'muted');
  let time = params[1];
  if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a muted role').catch(console.error);
  if (!time) return message.reply("You need to set the time for the tempmute").catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the tempmute.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to tempmute.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Tempmute')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

  user.addrole(muteRole.id);
  message.channel.send(`${user}, you've been muted.`);
  
  setTimeout(function() {
    user.removeRole(muteRole.id);
    message.channel.send(`${user}, you've been muted.`);
  }, ms(time));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'tempmute',
  description: 'Tempmutes a mentioned user, needing to have a muted role.',
  usage: 'tempmute [mention] [reason]'
};
