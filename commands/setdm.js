const db = require('quick.db')

exports.run = (bot, message, args, func) => {
    const db = require('quick.db')

    if (!args.join(" ") && args.join(" ").toUpperCase() !== 'NONE') return message.channel.send('**Please set a dm welcome message**\n > *~setdm message*')

    // Fetch the new channel they mentioned
    let newMessage;
    if (args.join(" ").toUpperCase() === 'NONE') newMessage = ''; // If they wrote the word none, it sets newMessage as empty.
    else newMessage = args.join(" ").trim(); // If they didn't write none, set what they wrote as the message

    // This will update the .text of the joinMessageDM_guildID object.
    db.set(`joinMessageDM_${message.guild.id}`, newMessage).then(i => {
        message.channel.send`**Successfully updated DN welcome text to:**\n > *${args.join(" ").trim()}*`) // Finally, send in chat that they updated the channel.
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'setdm',
  description: 'Sets/Updates the welcoming dm message.',
  usage: 'setdm {message}'
}
