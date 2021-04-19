const Discord = require('discord.js');
const database = require('quick.db');
exports.run = async(client,message,args)=>{
if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Yetkin yok");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("Durumunda reklam(link) olanlar ; ")
        .setDescription(message.guild.members.cache.filter(r=>!r.user.bot).filter(r=>r.presence.status=="online"||r.presence.status=="idle").filter(r=>r.presence.activities.length>0).filter(r=>String(r.presence.activities[0].state).includes("www.")||String(r.presence.activities[0].state).includes(".com")||String(r.presence.activities[0].state).includes("discord.gg/")||String(r.presence.activities[0].state).includes("http://")||String(r.presence.activities[0].state).includes("https://")).map(r2=>r2).join(","))
    )

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'durumreklamtaraması'
};