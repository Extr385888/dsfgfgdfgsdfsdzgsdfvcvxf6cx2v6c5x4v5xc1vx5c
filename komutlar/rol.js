const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {//Can°B#1308
      if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
if(!message.member.hasPermission('MANAGE_ROLES')) return;
let chimped = message.guild.roles.cache.filter(a => a.name !== 'everyone' && !a.managed).sort((a, b) => a.position - b.position).map(c => c.name).reverse()
message.channel.send('```'+`Roles [${message.guild.roles.cache.size}]:\n`+chimped.join('\n')+'```')
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["role","rol"],
  permLevel: 0
}

exports.help = {
  name: 'roles'
};// codare ♥