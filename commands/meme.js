const Discord = require('discord.js');
const superagent = require('superagent');
exports.run = async (client, message, args) => {
const { request} = await superagent
    .get('https://api.ksoft.si/meme/random-meme')
    .set('Authorization', 'Token 90c394ab0eddb46cf8e7b9ced143f792cb254a89')
    .then(function(res) {
         message.channel.send(res.url)
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'meme',
  description: 'Sends Random Memes.',
  usage: 'meme'
};
