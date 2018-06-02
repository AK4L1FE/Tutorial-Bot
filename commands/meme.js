const Discord = require("discord.js");
const client = new Discord.Client();
const meme = require('memejs');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  meme(function(data) {
  const embed = new Discord.RichEmbed()
  .setTitle(data.title[0])
  .setColor("#7d1616")
  .setImage(data.url[0])
  message.delete().catch(O_o => {});
  message.channel.send({embed});
  })};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["meme", "memez"],
  permLevel: "User"
};

exports.help = {
  name: "meme",
  description: "Memez 4 life",
  usage: "meme"
};
