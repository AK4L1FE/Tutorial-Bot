const Discord = require("discord.js");
const client = new Discord.Client();
let user = message.mentions.users.first() || message.author;


exports.run = async (client, message, args, level) => {
const embed = new Discord.RichEmbed()
  .setTitle(`${user.name}`)
  .setColor("#7d1616")
  .setImage(user.displayAvatarURL)
  message.delete().catch(O_o => {});
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["av"],
  permLevel: 0
};

exports.help = {
  name: "avatar",
  description: "Displays your avatar or a mentioned user's avatar.",
  usage: "avatar {mention}"
};
