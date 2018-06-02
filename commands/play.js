const Discord = require('discord.js');
const YTDL = require("ytdl-core");
exports.run = (client, message, args, function) => {
  if (!args[1]) {
    message.channel.send(`You must be in a voice channel`);
    return;
  };
  
  if (!message.member.voiceChannel) {
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
