const Discord = require('discord.js');
const YTDL = require("ytdl-core");
exports.run = (client, message, args, servers) => {
  if (!args[0]) {
    message.channel.send(`Please provide a link.`);
    return;
  };
  
  if (!message.member.voiceChannel) {
    message.channel.send(`You must be a voice channel.`);
    return;
  };
  
  if (!servers[message.guild.id]) servers[message.guild.id] = {
    queue: []
  };
  
  var server = servers[message.guild.id];
  
  if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
    play(connection, message);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'play',
  description: 'Plays music.',
  usage: 'play {message}'
}
