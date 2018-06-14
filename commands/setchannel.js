const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (bot, message, args, func) => {

    // Return Statements
    if (!message.member.roles.find('name', 'Owner')) return func.embed(message.channel, '**This command requires the Owner role**', 120000) // This returns if it CANT find the owner role on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
    if (!message.mentions.channels.first() && args.join(" ").toUpperCase() !== 'NONE') return func.embed(message.channel, '**Please mention a channel**\n > *~setChannel #channel*') // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log

    // Fetch the new channel they mentioned
    let newChannel;
    if (args.join(" ").toUpperCase() === 'NONE') newChannel = ''; // If they wrote the word none, it sets newChannel as empty.
    else newChannel = message.mentions.channels.first().id; // If they actually mentioned a channel, it will set newChannel as that.

    // Update Channel
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
