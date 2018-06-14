const chalk = require('chalk');
module.exports = async (client, member, func) => {
    const db = require('quick.db');
    db.fetchObject(`autoRole_${member.guild.id}`).then(i => {

        // Check if no role is given
        if (!i.text || i.text.toLowerCase() === 'none'); // We want to put this un our guildMemberAdd, but we want to delete the return statement and just replace it with ; so it can run the rest of the code
        else { // Run if a role is found...

            try { // Try to add role...
                member.addRole(member.guild.roles.find('name', i.text))
            } catch (e) { // If an error is found (the guild supplied an invalid role), run this...
                console.log("A guild tried to auto-role an invalid role to someone.") // You can commet this line out if you don't want this error message
            }

        }

        // The code will go here, inside the other fetchObject. If you don't have that fetchObject don't worry just put it in bot.on('guildMemberAdd').

        // Fetch the channel we should be posting in - FIRST, we need to require db in this app.js
        db.fetchObject(`messageChannel_${member.guild.id}`).then(i => {

            // Fetch Welcome Message (DMs)
            db.fetchObject(`joinMessageDM_${member.guild.id}`).then(o => {

                // DM User
                if (!o.text) console.log('Error: Join DM Message not set. Please set one using ~setdm <message>'); // This will log in console that a guild didn't set this up, you dont need to include the conosle.log
                else func.embed(member, o.text.replace('{user}', member).replace('{members}', member.guild.memberCount)) // This is where the embed function comes in, as well as replacing the variables we added earlier in chat.

                // Now, return if no message channel is defined
                if (!member.guild.channels.get(i.text)) return console.log('Error: Welcome/Leave channel not found. Please set one using ~setchannel #channel') // Again, this is optional. just the console.log not the if statement, we still want to return

                // Fetch the welcome message
                db.fetchObject(`joinMessage_${member.guild.id}`).then(p => {

                    // Check if they have a join message
                    if (!p.text) console.log('Error: User Join Message not found. Please set one using ~setwelcome <message>')
                    else func.embed(member.guild.channels.get(i.text), p.text.replace('{user}', member).replace('{members}', member.guild.memberCount)) // We actually want to send the message.

                })

            })

        })

    })
