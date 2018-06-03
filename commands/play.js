const Discord = require("discord.js");
const YTDL = require("ytdl-core");
var servers = {};
function play (connection, message) {
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function()  {
      if (server.queue[1]) play(connection, message);
      else connection.disconnect();

});
}
exports.run = async (client, message, args) => {

if  (!args[0]) {
message.channel.sendMessage("Please Provide a Link");
return;
}
if (!message.member.voiceChannel) {
    message.channel.sendMessage("You must be in a voice channel");
    return;
  }
  if(!servers[message.guild.id]) servers[message.guild.id] = {
      queue: [ ]
    };

    var server = servers[message.guild.id];

    server.queue.push(args[0]);

    if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection)  {
      play(connection, message);
    });
  }
  
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