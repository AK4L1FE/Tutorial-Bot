module.exports = (guild, user) => {
  let welcomechannel = member.guild.channels.find(`name`, "ytwitch-welcome-leave");
  guild.welcomechannel.send(`${user.username} was just banned!`);
};



