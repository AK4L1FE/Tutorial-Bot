const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Sorry, but we can't find that user.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  message.channel.send(`${wUser} has been warned. He has been warned ${warns[wUser.id].warns} time(s).`);

  if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`name`, "mute");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            READ_MESSAGES: false,
            VOICE_CONNECT: false,
            CREATE_INSTANT_INVITE: false,
            CHANGE_NICKNAME: false
          });
        })
      }catch(e){
        console.log(e.stack);
      };
    };
    
    if(!muterole) return message.reply(`${wUser} has been temporarily muted.`);

    let mutetime = "300s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has been temporarily muted for 5 minutes.`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))
  }

}

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the mentioned user.',
  usage: 'warn [mention] [reason]'
};
