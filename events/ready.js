const chalk = require('chalk');
module.exports = async client => { // eslint-disable-line no-unused-vars
  console.log(chalk.bgGreen.black('I\'m Online'));
  client.user.setStatus('dnd');
  setInterval(function () {
    client.user.setGame(`;help | ${client.users.size} Users | ${client.guilds.size} Servers`, 'https://www.twitch.tv/hyp1nsurgerbot'); 
    client.user.setGame(`Join the Support Server!!!`, 'https://www.twitch.tv/hyp1nsurgerbot');
//random status'es in here
  }, [10000]);
 
  
};
