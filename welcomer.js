
const Discord = require("discord.js");
var bot = new Discord.Client();
bot.on("ready", () => {
    console.log("Ready");
});

bot.on('guildMemberAdd',  (member) => {
    member.guild.channels.get("343037231734456322").send("Welcome to this discord server! Hope you have fun :) " + member);
    });
    
    bot.on('guildMemberRemove', (member) => {
    member.guild.channels.get("363514912531677197").send("Good bye good old friend, it was amazing having you here. Everyone pay your respects by reacting with 'F' " + member);
    });
    
 bot.login(process.env.BOT_TOKEN); 
