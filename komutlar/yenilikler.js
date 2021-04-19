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
 .setTitle('**:loudspeaker: Duyuru & Güncelleme Notları** ')
 .setDescription(`
 **v1.9** Güncelleme Notları;
 • **!cursed** Cursed yazı stili ile yazarsınız.
 • **!boğazla** Profil fotoğrafınıza karşınızdakini boğazlıyormuş gibi filtre  uygular.
 • **!nuke** Komutu kullandığınız kanalı onay verirseniz siler sonra tekrar oluşturur.
 • **!token** Troll komutdur token veriyormuş gibi yapar.
 • **!isimreklamkoruma** %100 reklamları koruma şansına sahip değil. Ancak büyük ölçüde isminde reklam olanları banlar. 
 • **!dizifilmara** IMDb'den arama yapar.
 • **!sayaç** Gelişmiş sayaç komutudur.
 • **!kick** Kick komutu güncellenmiştir artık kick atmadan önce onay istiyor.
 • **!bs** Brawl Stars kutu açarsınız.
 **v2.0** Güncelleme Notları;
 • Menü ve tasarım değişti.
 • !ai komutu silindi.
 • Bot kategorisi eklendi.
 • !yenilikler ve !ekip komutları eklendi.
 • !emoji kategorisi ve komutları  eklendi.
 **v2.1** Güncelleme Notları;
 • !saas Komutu **Fix!** (ayrıca bazı sunucularda oluşan hatadan dolayı özür dilerim.)
 • !korona Komutu **Fix!**
 `)
.setFooter('!hata-bildir & !istek-bildir > Hata & bug & tavsiye ve diğer sorunlar için bizlere ulaşabilirsiniz.')
message.channel.send(eğlence)
}
 
    if(dil === "EN") { // TÜRKÇE DİL
    
const eğlence = new Discord.MessageEmbed()
 .setTimestamp()
 .setTitle('**:loudspeaker: Duyuru & Güncelleme Notları** ')
 .setDescription(`
 **v1.9** Güncelleme Notları;
 • **!cursed** Cursed yazı stili ile yazarsınız.
 • **!boğazla** Profil fotoğrafınıza karşınızdakini boğazlıyormuş gibi filtre  uygular.
 • **!nuke** Komutu kullandığınız kanalı onay verirseniz siler sonra tekrar oluşturur.
 • **!token** Troll komutdur token veriyormuş gibi yapar.
 • **!isimreklamkoruma** %100 reklamları koruma şansına sahip değil. Ancak büyük ölçüde isminde reklam olanları banlar. 
 • **!dizifilmara** IMDb'den arama yapar.
 • **!sayaç** Gelişmiş sayaç komutudur.
 • **!kick** Kick komutu güncellenmiştir artık kick atmadan önce onay istiyor.
 • **!bs** Brawl Stars kutu açarsınız.
 **v2.0** Güncelleme Notları;
 • Menü ve tasarım değişti.
 • !ai komutu silindi.
 • Bot kategorisi eklendi.
 • !yenilikler ve !ekip komutları eklendi.
 • !emoji kategorisi ve komutları  eklendi.
 **v2.1** Güncelleme Notları;
 • !saas Komutu **Fix!** (ayrıca bazı sunucularda oluşan hatadan dolayı özür dilerim.)
 • !korona Komutu **Fix!**
 `)
 .setFooter('!hata-bildir & !istek-bildir > Hata & bug & tavsiye ve diğer sorunlar için bizlere ulaşabilirsiniz.')
message.channel.send(eğlence)
}
  
  };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["Yenilikler","botnews"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yenilikler',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}