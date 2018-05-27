const chalk = require('chalk');
module.exports = async client => { // eslint-disable-line no-unused-vars
  console.log(chalk.bgGreen.black('I\'m Online'));
  client.user.setStatus('dnd');
  client.user.setPresence({ game: { name: `;help | ${client.user.username} is online on ${client.guilds.size} servers!`, type: 3} });
  
};
