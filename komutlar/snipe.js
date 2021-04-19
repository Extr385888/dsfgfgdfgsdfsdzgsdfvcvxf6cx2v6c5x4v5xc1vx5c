const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

   exports.run = async(client, message, args) => {
             if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
    const emirhan = await db.fetch(`snipe.id.${message.guild.id}`)
    if(!emirhan) {
    const codare2 = new MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`Mesaj bulunamadı!`)
.setColor(`#0c0c0c`)
    message.channel.send(codare2);
          } else {
  let kullanıcı = client.users.cache.get(emirhan);
  const emran = await db.fetch(`snipe.mesaj.${message.guild.id}`)
  const codare = new MessageEmbed()
  .setAuthor(kullanıcı.username, kullanıcı.avatarURL())
  .setDescription(`Silinen mesaj: ` + emran)
.setColor(`#0c0c0c`)
  message.channel.send(codare) }
}
exports.conf = {
    enabled:true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}
exports.help = {
  name: "snipe",
  description: 'Son silinen mesajı yakalar.',
  usage: 'snipe'
} 