const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args, tools) => {

    var subreddits = [
        'cat',
        'kitty'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(cat => {
            const embed = new Discord.RichEmbed()

                .setAuthor("Meow :cat:", message.author.avatarURL)
                .setImage(cat)
                .setTimestamp();
            message.channel.send({
                embed
            });
        })
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
