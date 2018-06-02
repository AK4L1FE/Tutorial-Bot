exports.run = (client, message, args) => {
    const cleverbot = require("cleverbot.io");
    const clever = new cleverbot("XinPY3bIluK693Ly", "iA5kxqieNGXlLYauuaehvFujXRDpGWGA");
    clever.setNick("zmodmvp");
    clever.create(function(err, session) {
        clever.ask(args.join(' '), function(err, res) {
            message.channel.send(res);
        });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'chat',
  description: 'CleverBot.(Slow answer)',
  usage: 'chat {message}'
};



