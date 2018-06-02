const chalk = require('chalk');
module.exports = async client => { // eslint-disable-line no-unused-vars
  console.log(chalk.bgGreen.black('I\'m Online'));
  client.user.setStatus('dnd');
  client.user.setGame(`;;help | ${client.users.size} Users | ${client.guilds.size} Servers`, 'https://www.twitch.tv/ak4l1fe');
  
};
