module.exports = member => {
  const guild = member.guild;
  guild.defaultChannel.send(`Welcome to the server ${member.user.username}!`);
};
