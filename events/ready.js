const Discord = require('discord.js');
const chalk = require('chalk');
const bot = new Discord.Client();
module.exports = client => { // eslint-disable-line no-unused-vars
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
     bot.user.setActivity(`${bot.user.username} is online on ${bot.guilds.size} servers!`, {type: 2});

     };
