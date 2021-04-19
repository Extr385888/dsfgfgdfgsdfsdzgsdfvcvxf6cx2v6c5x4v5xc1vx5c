const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bot dilin dilini değiştirmek için yeterli yetkiye sahip değilsin.");
  
  
let CodEming = args[0]


if(!args[0]) return message.reply('Geçerli bir dil belirtmelisin. \n\n **Örnek:** `!dil TR` \n\n **DİLLER** \n `EN,TR`')


if(args[0] === "TR") {
  message.delete()
  let yasin = new Discord.MessageEmbed()
  .setTitle('Dil Değiştirildi.')
  .setDescription('Botun dili başarıyla **TÜRKÇE** olarak kaydedildi.')
  .setColor('GREEN')
  message.channel.send(yasin).then(s => s.react('✅'))
  
 db.set(`dil_${message.guild.id}`, "TR") 
}  
  
 if(args[0] === "EN") {
  message.delete()
  let yasin = new Discord.MessageEmbed()
  .setTitle('Language Changed')
  .setDescription('The language of the bot was successfully saved as **ENGLISH**.')
  .setColor('GREEN')
  message.channel.send(yasin).then(s => s.react('✅'))
  
   db.set(`dil_${message.guild.id}`, "EN") 

}  

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["lang"], 
  permLevel: 0
};

exports.help = {
  name: 'dil',
  description: 'Sahibimi sunucuya çağırırsınız', 
  usage: 'dil'
};