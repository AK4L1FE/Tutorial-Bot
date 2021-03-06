const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.reply('check your DMs for the command list');
    message.author.send(`= Command List =\n\n[Use ${settings.prefix}help <commandname> for details]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}\nFor further help, please join The Z-Mod\'s Official Support Server for more help and suggestions: https://discord.gg/U3hbwrt`, {code:'asciidoc'});
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(`= ${command.help.name} = \n${command.help.description}\nusage::${command.help.usage}`, {code:'asciidoc'});
      return message.reply('check your DMs for the command you have mentioned above.');
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dmh', 'dmhalp'],
  permLevel: 0
};

exports.help = {
  name: 'dmhelp',
  description: 'Displays all the available commands for your permission level by DM.',
  usage: 'dmhelp [command]'
};
