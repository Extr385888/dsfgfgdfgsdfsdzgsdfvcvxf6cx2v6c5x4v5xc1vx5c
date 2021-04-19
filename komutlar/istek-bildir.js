const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Bu komut geçici olarak devre dışıdır.** :x:')

const embed = new Discord.MessageEmbed()
.setTitle("Dark Place Bot İstek Sistemi")
.setColor('BLUE')
.setDescription(`**İstek Kanalı** ${message.channel.name} \n **İstek Bildirilen Sunucu** \`${message.guild.name}\` \n **İstek Bildiren Kullanıcı** <@${message.author.id}> \n **İstenilen Komut :** \`${istek}\``)
client.channels.cache.get('779030610063917087').send(embed)
  
message.channel.send("İstek bildiriminiz gönderildi. :white_check_mark:").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["request-notify"],
  permLevel: 0  
};

exports.help = {
    name: 'istek-bildir',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}