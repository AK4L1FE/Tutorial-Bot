const settings = require('../settings.json');
exports.run = (client, message, params, reaction) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send("If you want command list, react with the checkmark along with me, and if you don't want it, react with the crossmark along with me.");
    message.react("458396576273137674");
    message.react("458397350201917453");
    if(message.author.react) {
      if(!reaction.emoji.id== "458396576273137674") return;
      message.channel.send(`= Command List =\n\n[Use ${settings.prefix}help <commandname> for details]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}\nFor further help, please join The Z-Mod\'s Official Support Server for more help and suggestions: https://discord.gg/U3hbwrt`, {code:'asciidoc'});
    } else if(reaction.emoji.id== "458397350201917453") {
      return
    }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage::${command.help.usage}`, {code:'asciidoc'});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
