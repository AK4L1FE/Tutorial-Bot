const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const fs = require('fs');
  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("No no no. You don't have permissions for that.");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(sEmbed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'setprefix',
  description: 'Changes a prefix to your chosen custom prefix.',
  usage: 'setprefix {newprefix}'
}
