const Discord = require('discord.js');
module.exports = async (client, member, message, user, args) => {
member.guild.channels.get("welcome").send(`"${member.user.username}" has been banned from "${member.guild.name}"`);
};
