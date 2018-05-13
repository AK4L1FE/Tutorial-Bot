const Discord = require('discord.js');
const chalk = require('chalk');
const bot = new Discord.Client();
module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(chalk.bgGreen.black('I\'m Online'));
     bot.user.setActivity(`${bot.user.username} is online on ${bot.guilds.size} servers!`, {type: 2});
     
     };
