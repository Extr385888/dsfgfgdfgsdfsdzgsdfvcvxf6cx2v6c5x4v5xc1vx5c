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
<:darkplace:818868933574262824>   \**!rol** = Sunucuda bulunan bütün rolleri görüntüler.
<:darkplace:818868933574262824>   \**!deprem-bilgi** = Türkiyede son 10 depremi görüntüler.
<:darkplace:818868933574262824>   \**!kullanıcı-bilgi** = Kullanıcı bilgi komutudur.
<:darkplace:818868933574262824>   \**!hatırlat** = Belirledğiniz süre sonra bot size hatırlatmak amacıyla mesaj gönderir.
<:darkplace:818868933574262824>   \**!rol-bilgi** = Belirttiğiniz rol hakkında bilgi alırsınız.
<:darkplace:818868933574262824>   \**!yapımcım** = Yapımcımı gösterir.
<:darkplace:818868933574262824>   \**!sayı-tahmin** = Sayı tahmin oyunu oynarsınız.
<:darkplace:818868933574262824>   \**!emojiler** = Sunucudaki olan bütün emojileri sergiler.
<:darkplace:818868933574262824>   \**!afk** = Afk komutudur.
<:darkplace:818868933574262824>   \**!youtube** = Youtubeden arama yapmanızı sağlar.
<:darkplace:818868933574262824>   \**!bitcoin** = Bitcoin verilerini görüntüler.
<:darkplace:818868933574262824>   \**!havadurumu** =  Belirtilen bölgenin hava durumunu gösterir.
<:darkplace:818868933574262824>   \**!canlıdestek** =  Canlı Destek talebinde bulunursunuz.
<:darkplace:818868933574262824>   \**!döviz** = Döviz piyasasını görüntüler.
<:darkplace:818868933574262824>   \**!itunes** = İtunes üzerinde uygulama / şarkı / albüm gösterirsiniz.
<:darkplace:818868933574262824>   \**!lyrics** = Yazdığınız şarkı sözünü atar.
<:darkplace:818868933574262824>   \**!eject** = Etiketlediğiniz kişiyi asarsınız.
<:darkplace:818868933574262824>   \**!snow** = Profil fotografınıza kar efekti uygular.
<:darkplace:818868933574262824>   \**!trump** = Trump adına tweet paylaşırsınız.
<:darkplace:818868933574262824>   \**!adamasmaca** = Adam asmaca oyunu oynarsınız.
<:darkplace:818868933574262824>   \**!tdk** = Tdkdan atasözü ve kelimenin anlamını aratırsınız **ÖRN:** !tdk elma.
<:darkplace:818868933574262824>   \**!yorum** = Youtube, yorum yapmanızı sağlayan komuttur.

`)
message.channel.send(eğlence)
}
 
    if(dil === "EN") { // TÜRKÇE DİL
    
const eğlence = new Discord.MessageEmbed()
 .setTimestamp()
.setDescription(`
<:darkplace:818868933574262824>   \**!rol** = Displays all roles available on the server.
<:darkplace:818868933574262824>   \**!earthquake-information** = Displays the last 10 earthquake in Turkey.
<:darkplace:818868933574262824>   \**!user-information** = It is a user information command.
<:darkplace:818868933574262824>   \**!remind** = After the time you set, the bot will send a message to remind you.
<:darkplace:818868933574262824>   \**!rol-info** = You will receive information about the role you specified.
<:darkplace:818868933574262824>   \**!myproducer** = Shows my producer.
<:darkplace:818868933574262824>   \**!number-guess** = You play the number guessing game.
<:darkplace:818868933574262824>   \**!emoji** = It displays all the emojis on the server.
<:darkplace:818868933574262824>   \**!afk** = Afk command.
<:darkplace:818868933574262824>   \**!youtube* = Allows you to make a call from youtub.
<:darkplace:818868933574262824>   \**!bitcoin* = Displays Bitcoin data.
<:darkplace:818868933574262824>   \**!havadurumu** =  Shows the weather of the specified area
<:darkplace:818868933574262824>   \**!live-support** = It is the command to request Live Support.
<:darkplace:818868933574262824>   \**!döviz* = Displays the foreign exchange market.
<:darkplace:818868933574262824>   \**!itunes** = You show apps / songs / albums on iTunes.
<:darkplace:818868933574262824>   \**!lyrics** = It discards the lyrics you wrote.
<:darkplace:818868933574262824>   \**!eject** = You hang the person you tagged.
<:darkplace:818868933574262824>   \**!snow** = It applies snow effect to your profile photo.
<:darkplace:818868933574262824>   \**!trump** = You're tweeting on behalf of Trump.
<:darkplace:818868933574262824>   \**!adamasmaca** = You play the hangman game.
<:darkplace:818868933574262824>   \**!yorum** = Youtube is the command that allows you to comment.
`)
message.channel.send(eğlence)
}
  
  };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["kullanıcı2","user2"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı-yardım2',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}