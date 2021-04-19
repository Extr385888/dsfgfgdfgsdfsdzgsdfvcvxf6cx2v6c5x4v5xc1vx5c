const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
  
  let dil = await db.fetch(`dil_${message.guild.id}`)
  
  
  
  if(!dil) { // DİL AYARLANMAMIŞ ( BOTUNUZ EĞER DİL AYARLANMADIYSA HANGİ DİLİ KULLANMASINI İSTİYORSANIZ. )
    message.channel.send('Herhangi bir dil ayarlanmamış varsayılan dil çalıştı.')
  }
  
  
  if(dil === "TR") { // TÜRKÇE DİL
const eğlence = new Discord.MessageEmbed()
 .setTimestamp()
.setDescription(`
<:darkplace:818868933574262824>    \**!botstat** = Botun genel istatistik bilgileri atar.
<:darkplace:818868933574262824>    \**!hata-bildir** = Bulduğun hataları bize bildirebilirsin ayrıca hata için sunucuda rol kazanırsın.
<:darkplace:818868933574262824>    \**!istek-bildir** = Bota eklenmesini istediğinizi bize gönderirsiniz.
<:darkplace:818868933574262824>    \**!yenilikler** = Botun son güncelleme hakkında detaylı bilgi alabilirsiniz.
<:darkplace:818868933574262824>    \**!ekip** = Bot yetkili ekibini listeleyebilirsiniz.
<:darkplace:818868933574262824>    \**!ping** = Botun pingine bakabilirsiniz.
<:darkplace:818868933574262824>    \**!destekçi** = Oy vererek destek sunucumuzda özel rol alabilirsiniz.
<:darkplace:818868933574262824>    \**!prefix** = prefixi değiştirmenize yarar **ÖRN:** !prefix -
<:darkplace:818868933574262824>    \**!davet** = Beni sunucuna davet et.

`)
message.channel.send(eğlence)
}
 
    if(dil === "EN") { // TÜRKÇE DİL
    
const eğlence = new Discord.MessageEmbed()
 .setTimestamp()
.setDescription(`
<:darkplace:818868933574262824>    \**!botstat** = Assigns general statistics information of the bot.
<:darkplace:818868933574262824>    \**!report-error** = You can report the errors you find to us, and you will get a role in the server for the error.
<:darkplace:818868933574262824>    \**!request-notify** = You send us what you want added to our bot.
<:darkplace:818868933574262824>    \**!botnews** = You can get detailed information about bottun's latest update.
<:darkplace:818868933574262824>    \**!team** = You can list the bot authorized team.
<:darkplace:818868933574262824>    \**!ping** = You can check the bot's ping.
<:darkplace:818868933574262824>    \**!destekçi** = By voting, you have the opportunity to take a special role on our support server.
<:darkplace:818868933574262824>    \**!prefix** = allows you to change the prefix ** EXAMPLE: **!prefix -
<:darkplace:818868933574262824>    \**!invite** = Invite me to your server


`)
message.channel.send(eğlence)
}
  
  };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["Bot","BOT"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'bot',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}