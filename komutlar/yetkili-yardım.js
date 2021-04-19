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
<:darkplace:818868933574262824>   \**!ban** = Etiketlediğiniz kişiyi banlarsınız. 
<:darkplace:818868933574262824>   \**!kick** = Etiketlediğiniz kişiyi atarsınız. 
<:darkplace:818868933574262824>   \**!sil** = Belirlediğiniz kadar mesaj siler. 
<:darkplace:818868933574262824>   \**!yavaş-mod** = Yavaş modu ayarlarsınız. 
<:darkplace:818868933574262824>   \**!forceban** = Birisine id ban atarsınız. 
<:darkplace:818868933574262824>   \**!softban** = Etiketlediğiniz kişiyi mesajlarını silerek banlar. 
<:darkplace:818868933574262824>   \**!unban** = Birisinin banını açarsınız. 
<:darkplace:818868933574262824>   \**!sa-as** = Bot biri sa dedimi cevap verir. 
<:darkplace:818868933574262824>   \**!sohbet-kapat** = Sohbeti kapatırsınız. 
<:darkplace:818868933574262824>   \**!sohbet-aç** = Sohbeti açarsınız. 
<:darkplace:818868933574262824>   \**!çekiliş** = Çekiliş başlatırsınız.
<:darkplace:818868933574262824>   \**!banlist** = Sunucuda banlanan bütün kişileri görüntüler.
<:darkplace:818868933574262824>   \**!isimdeğiştir** = Etiketlediğiniz kişinin ismini değiştirirsiniz.
<:darkplace:818868933574262824>   \**!çek** = Etiketlediğiniz kişiyi bulunduğunuz odaya çekersiniz.
<:darkplace:818868933574262824>   \**!rolver** = Etiketlediğiniz kişiye etiketlediğiniz rolü verirsiniz.
`)
message.channel.send(mod)
}
 
    if(dil === "EN") { // TÜRKÇE DİL
    
 const mod = new Discord.MessageEmbed()
 .setTimestamp()
.setDescription(`
<:darkplace:818868933574262824>   \**!ban** = You ban the person you tagged. 
<:darkplace:818868933574262824>   \**!kick** = You assign the person you tagged. 
<:darkplace:818868933574262824>   \**!clear** = Deletes as many messages as you specify. 
<:darkplace:818868933574262824>   \**!slow-mode** = You set the slow mode. 
<:darkplace:818868933574262824>   \**!forceban** = You prohibit the client ID of someone from the server. 
<:darkplace:818868933574262824>   \**!softban** = Banns the person you tagged by deleting their messages.
<:darkplace:818868933574262824>   \**!unban** = You open someone's ban. 
<:darkplace:818868933574262824>   \**!sa-as** = this is not available in english :/
<:darkplace:818868933574262824>   \**!chat-close** = You close the chat. 
<:darkplace:818868933574262824>   \**!chat-open** = You open the chat. 
<:darkplace:818868933574262824>   \**!gieaway** = You start the prize draw.
<:darkplace:818868933574262824>   \**!banlist** = Displays all the people banned on the server.
<:darkplace:818868933574262824>   \**!setnick** = You change the name of the person you tag.
<:darkplace:818868933574262824>   \**!çek** = You draw the person you tag to the room you are in.
<:darkplace:818868933574262824>   \**!roleadd** = You give the person you tag the role you tagged.
`)
message.channel.send(mod)
}
  
  };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["yetkili"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'authorized',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}