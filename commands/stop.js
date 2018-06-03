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

exports.run = async (client, message, args, connection) => {
    var server = servers[message.guild.id];

    if (message.guild.voiceConnection) connection.disconnect();
    return;
        }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'stop',
  description: 'Stops music.',
  usage: 'stop'
}
