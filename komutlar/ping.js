const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
      if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
 
  const embed = new Discord.MessageEmbed()
  .setTitle('Ping')
  .setDescription(`Pingim: ${client.ws.ping}ms'dir. `, message.author.name)
  .setThumbnail(client.user.avatarURL())
  message.channel.send(embed)
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'ping',
  description: 'Ping komutudur.',
  usage: 'ping'
}