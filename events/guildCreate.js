module.exports = async client => {
  console.log('I joined a new server!!!');
  const bchannel = member.guild.channels.find(`name`, "general");
  if (!bchannel) return;
  bchannel.sendMessage(`Hi, I\'m Z-Bot and I came here to help, join my support server if you want more help: https://discord.gg/U3hbwrt`);
};
