const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You do not have manage messages.");

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!toMute) return message.channel.sendMessage("You did not specify a user mention or ID!");
  
  if (toMute.id === message.author.id) return message.chennel.sendMessage("You cannot mute yourself.");
  if (toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("You cannot mute a member who is higher or has the same role as you.");
  
  let rolek = message.guild.roles.find(r => r.name === "Muted");
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
  
  if(toMute.roles.has(rolek.id)) return message.channel.sendMessage("This user is already muted!");
  
  await toMute.addRole(rolek);
  message.channel.sendMessage("I have muted him.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Mutes the mentioned user.',
  usage: 'mute [mention]'
};
