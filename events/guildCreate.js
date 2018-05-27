module.exports = async (client, guild, member) => {
  console.log('I joined a new server!!!');
  const bchannel = member.guild.channels.find(`name`, "general");
  if (!bchannel) return;
  bchannel.sendMessage(`Hi, I\'m Z-Mod and I came here to help, join my support server if you want more help: https://discord.gg/U3hbwrt`);
};
