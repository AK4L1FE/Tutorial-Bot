const Discord = require('discord.js');
const chalk = require('chalk');
const bot = new Discord.Client();
 bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
     bot.user.setActivity(`${bot.user.username} is online on ${bot.guilds.size} servers!`, {type: 2});
     
     });
