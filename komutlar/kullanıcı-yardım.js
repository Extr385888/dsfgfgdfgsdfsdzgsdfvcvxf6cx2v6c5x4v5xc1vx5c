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
<:darkplace:818868933574262824>   \**!düello** = Etiketlediğiniz kişi ile oyun oynarsınız.
<:darkplace:818868933574262824>   \**!avatar** = Profil fotoğrafınıza bakarsınız.
<:darkplace:818868933574262824>   \**!bug-bildir** = Botta bulduğunuz bugu bildirisiniz (Bug bildirenlere özel 'Hata Ayıklayıcısı' rolü alabilirsin).
<:darkplace:818868933574262824>   \**!hesapla** = Matematik işlemlerinizi yapar.
<:darkplace:818868933574262824>   \**!id** = Etiketlediğiniz kişinin İD'sine bakarsınız.
<:darkplace:818868933574262824>   \**!botstat** = Botun istatiklerini görüntüler.
<:darkplace:818868933574262824>   \**!ping** = Botun pingini görüntülersiniz.
<:darkplace:818868933574262824>   \**!profil** = Profilinize bakarsınız.
<:darkplace:818868933574262824>   \**!istek-bildir** = Bota eklenmesini istediğiniz komutu bildirirsiniz.
<:darkplace:818868933574262824>   \**!üyedurum** = Sunucudaki üyeler hakkında durum bilgisi alırsınız.
<:darkplace:818868933574262824>   \**!steamstore** = Belirtilen steam oyunu hakkında bilgi gösterir.
<:darkplace:818868933574262824>   \**!korona** = Korona verilerini gösterir.
<:darkplace:818868933574262824>   \**!sunucubilgi** = Sunucu bilgiyi gösterir.
<:darkplace:818868933574262824>   \**!gifara** = Giphy sunucusundan yazdığınız gifi çıktı olarak atar.
<:darkplace:818868933574262824>   \**!yetkilerim** = Sahip olduğunuz yetkileri görüntüler.
<:darkplace:818868933574262824>   \**!elyazı** = Yazdığınız kelimeyi elyazısına çevirir.
<:darkplace:818868933574262824>   \**!çağır** = Bot özelden sahibimi çağırır.
<:darkplace:818868933574262824>   \**!çeviri** = google çeviri komutudur.
<:darkplace:818868933574262824>   \**!dizifilmara** = IMDb'den arama yapar.
<:darkplace:818868933574262824>   \**!v11tov12** = v11 komutlarını 12'ye çevirirsiniz.
<:darkplace:818868933574262824>   \**!uptime** = Botun çalışma süresünü görüntülersiniz.
`)
message.channel.send(eğlence)
}
 
    if(dil === "EN") { // TÜRKÇE DİL
    
const eğlence = new Discord.MessageEmbed()
 .setTimestamp()
.setDescription(`
<:darkplace:818868933574262824>   \**!duel** = You start a game with the person you tagged.
<:darkplace:818868933574262824>   \**!avatar** = Helps you look at your profile picture.
<:darkplace:818868933574262824>   \**!bug-report** = Used to report the bug found in the bot (You can get the 'Debugger' role for bug reporters).
<:darkplace:818868933574262824>   \**!calculate** = Bot does the math.
<:darkplace:818868933574262824>   \**!id** = You look at the ID of the person you tagged.
<:darkplace:818868933574262824>   \**!botstat** = Displays statistics of the bot.
<:darkplace:818868933574262824>   \**!ping** = You view the bot's ping.
<:darkplace:818868933574262824>   \**!profile** = Command to view your profile.
<:darkplace:818868933574262824>   \**!request-notify** = You declare the command you want added to the bot.
<:darkplace:818868933574262824>   \**!member-status** = You will receive status information about the members on the server.
<:darkplace:818868933574262824>   \**!steamstore** = Shows information about the specified steam game.
<:darkplace:818868933574262824>   \**!corona** = Shows corona data.
<:darkplace:818868933574262824>   \**!server-information** = The server shows the information.
<:darkplace:818868933574262824>   \**!gif-search** = Giphy, gif search command on its site.
<:darkplace:818868933574262824>   \**!my-authority** = Displays the privileges you have.
<:darkplace:818868933574262824>   \**!hand-writing** = It translates the word you have written into handwriting.
<:darkplace:818868933574262824>   \**!call** = The bot is calling my owner privately.
<:darkplace:818868933574262824>   \**!translation** = google translate command.
<:darkplace:818868933574262824>   \**!dizifilmara** = You search for movies on IMDb
<:darkplace:818868933574262824>   \**!v11tov12** = You change v11 commands to 12.
<:darkplace:818868933574262824>   \**!uptime** = You view the bot's runtime.
`)
message.channel.send(eğlence)
}
  
  };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["kullanıcı","user"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı-yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}