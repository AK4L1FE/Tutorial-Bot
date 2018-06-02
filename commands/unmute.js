const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You do not have manage messages.");

  let toUnMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!toUnMute) return message.channel.sendMessage("You did not specify a user mention or ID!");
  
  if (toUnMute.id === message.author.id) return message.channel.sendMessage("You cannot mute yourself.");
  if (toUnMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("You cannot mute a member who is higher or has the same role as you.");
  
  let rolek = message.guild.roles.find("name", "Muted");
  if (!rolek) {
    try {
      role = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions: []
      });
      
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(rolek, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
  }
  
  if(toUnMute.roles.has(rolek.id)) return message.channel.sendMessage("This user is already unmuted!");
  
  await toUnMute.removeRole(rolek);
  message.channel.sendMessage("I have unmuted him.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unmute',
  description: 'UnMutes the mentioned user.',
  usage: 'unmute [mention]'
};
