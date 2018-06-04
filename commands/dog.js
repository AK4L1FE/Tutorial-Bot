const Discord = require("discord.js");
const client = new Discord.Client();


exports.run = async (client, message, args, level, member) => {
	const superagent = require("superagent");
    const { body } = await superagent
    .get('https://dog.ceo/api/breeds/image/random');
    const embed = new Discord.RichEmbed()
    .setColor(0x954D23)
    .setTitle("Woof :dog2:")
    .setImage(body.message)
    message.channel.send({embed})
    


};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dog"],
  permLevel: 0
};

exports.help = {
  name: "dog",
  description: "Displays a random dog image.",
  usage: "dog"
};
