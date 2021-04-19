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
    
 const mod = new Discord.MessageEmbed()
 .setTimestamp()
.setDescription(`

<:darkplace:818868933574262824>   \**!rol** = Sunucuda bulunan bütün rolleri gösterir.
<:darkplace:818868933574262824>   \**!uyarı** = Kullanıcıları uyarmak için kullanılan gelişmiş uyarı komutu.
<:darkplace:818868933574262824>   \**!prefix** = Botun prefixini değiştirme komutudur.
<:darkplace:818868933574262824>   \**!ever-here-engel** = Everyone ve here atılmasını engelleyen komutdur.
<:darkplace:818868933574262824>   \**!mesaj-log** = Editlenen silinen mesajları belittiğiniz kanalda gösterir.
<:darkplace:818868933574262824>   \**!snipe** = Son silinen mesajı gösterir.
<:darkplace:818868933574262824>   \**!bansorgulama** = İD sini belittiğiniz kişinin hangi sebeğle banlandığını söyler.
<:darkplace:818868933574262824>   \**!kanalaç** = Etiketlediğiniz kişiye özel kanal açar.
<:darkplace:818868933574262824>   \**!nuke** = Komutu kullandığınız kanalı onay verirseniz siler sonra tekrar oluşturur.

`)
message.channel.send(mod)
}
 
    if(dil === "EN") { // TÜRKÇE DİL
    
 const mod = new Discord.MessageEmbed()
 .setTimestamp()
.setDescription(`

<:darkplace:818868933574262824>   \**!role** = Shows all roles available on the server.
<:darkplace:818868933574262824>   \**!warning** = Advanced warning command used to alert users.
<:darkplace:818868933574262824>   \**!prefix** = Command to change the bot's prefix.
<:darkplace:818868933574262824>   \**!ever-here-obstacle** = Everyone and here is the order that prevents him from launching.
<:darkplace:818868933574262824>   \**!mesaj-log** = Displays edited and deleted messages in the channel you specified.
<:darkplace:818868933574262824>   \**!snipe** = Shows the last deleted message.
<:darkplace:818868933574262824>   \**!ban-inquiry** = Tells for what reason the banned people are banned
<:darkplace:818868933574262824>   \**!openchannel** = Opens a private channel per tag.
<:darkplace:818868933574262824>   \**!nuke** = The command will delete the channel you are using, if you approve, and then create it again.

`)
message.channel.send(mod)
}
  
  };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["yetkili2"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'authorized2',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}