const Discord = require("discord.js");


var bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Ready");
});

bot.on('guildMemberAdd',  (member) => {
    member.guild.channels.get("363514912531677197").send("Welcome to this discord server! Hope you have fun :) " + member);
    });
    
    
 bot.login(process.env.BOT_TOKEN); 
