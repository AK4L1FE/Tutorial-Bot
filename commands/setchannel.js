const Discord = require('discord.js');

exports.run = (bot, message, args, func) => {
    const db = require('quick.db');

    if (!message.mentions.channels.first() && args.join(" ").toUpperCase() !== 'NONE') return message.channel.send('**Please mention a channel**\n > *~setChannel #channel*') // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log

    let newChannel;
    if (args.join(" ").toUpperCase() === 'NONE') newChannel = ''; // If they wrote the word none, it sets newChannel as empty.
    else newChannel = message.mentions.channels.first().id; // If they actually mentioned a channel, it will set newChannel as that.

    db.updateText(`messageChannel_${message.guild.id}`, newChannel).then(i => {
        message.channel.send("Successfully set the welcoming and leaving channel!!! :ok_hand:");
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'setchannel',
  description: 'Sets/Updates the welcoming and leaving channel.',
  usage: 'setchannel {channelmention}'
}
