const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (bot, message, args) => {
  var fs = require('fs')
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
  let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!user) return message.reply("I Couldn't find him.");
  let warnlevel = warns[user.id].warns;
  const embed = new Discord.RichEmbed()

  .setTitle(`${user.username}`)
  .setColor("#7d1616")
  .addField("ID:", `${user.id}`)
  .addField("Roles:", `${user.roles}`)
  .addField("Infractions:", `${warnlevel}`)
  .setImage(user.displayAvatarURL)
  message.delete().catch(O_o => {});
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'Displays an users info.',
  usage: 'userinfo {mention}'
}
