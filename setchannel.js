const discord = require('discord.js');
const bot = new discord.Client();

bot.on("message", async (message, args, func, bot) => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

let prefix = ("~");
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

 if(cmd === `${prefix}setchannel`){
     
    if (!message.member.roles.find('name', 'Owner')) return func.embed(message.channel, '**This command requires the Owner role**', 120000); // This returns if it CANT find the owner role on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
    if (!message.mentions.channels.first() && args.join(" ").toUpperCase() !== 'NONE') return func.embed(message.channel, '**Please mention a channel**\n > *~setChannel #channel*');

    let newChannel;
    if (args.join(" ").toUpperCase() === 'NONE') newChannel = ''; // If they wrote the word none, it sets newChannel as empty.
    else newChannel = message.mentions.channels.first().id; // If they actually mentioned a channel, it will set newChannel as that.
    })

}
