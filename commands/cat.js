const Discord = require("discord.js");
const client = new Discord.Client();


exports.run = async (client, message, args, level, member) => {
	const superagent = require("superagent");
  const { body } = await superagent
	.get('aws.random.cat/meow');
	const embed = new Discord.RichEmbed()
	.setColor(0x954D23)
	.setTitle("Meow :cat:")
	.setImage(body.message)
	message.channel.send({embed})
};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cat"],
  permLevel: 0
};

exports.help = {
  name: "cat",
  description: "Displays a random cat image.",
  usage: "cat"
};
