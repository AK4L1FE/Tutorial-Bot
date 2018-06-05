const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!user) return message.reply("I Couldn't find him.");
  let warnlevel = warns[user.id].warns;
  let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
  const embed = new Discord.RichEmbed()

  .setTitle(`${user.username}`)
  .setColor("#7d1616")
  .addField("ID:", `${user.id}`)
  .addField("Number of infractions", `${warnlevel}`)
  .addField("Roles in the server:", `${user.roles}`)
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
