const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
            if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
  
  let dil = await db.fetch(`dil_${message.guild.id}`)
  
  
  
  if(!dil) { // DİL AYARLANMAMIŞ ( BOTUNUZ EĞER DİL AYARLANMADIYSA HANGİ DİLİ KULLANMASINI İSTİYORSANIZ. )
    message.channel.send(':flag_tr: Herhangi bir dil ayarlanmamış lütfen bir dil seçiniz. Dil ayarlamak için !dil <kod> :flag_tr:\n :flag_us: The language is not set, please select a language. To set the language !lang <code> :flag_us:')
  }
  
  
  if(dil === "TR") { // TÜRKÇE DİL
    
    const exampleEmbed = new Discord.MessageEmbed()//SadmaNN
    .setAuthor(`${client.user.username} Yardım Menüsü  `, 'https://cdn.discordapp.com/attachments/739930997029863485/818874030303215618/1615303942623.png', 'https://top.gg/bot/723926897477681276')//SadmaNN
    .setThumbnail('https://cdn.discordapp.com/attachments/739930997029863485/818874030303215618/1615303942623.png')//SadmaNN
    .addFields(//SadmaNN//SadmaNN
      { name: '**Kullanıcı**', value: '`!kullanıcı`', inline: true },//SadmaNN
      { name: '**Eğlence**', value: '`!eğlence`', inline: true },//SadmaNN
      { name: '**Yetkili**', value: '`!yetkili`', inline: true },//SadmaNN
      { name: '**Kullanıcı(2)**', value: '`!kullanıcı2`', inline: true },//SadmaNN
      { name: '**Eğlence(2)**', value: '`!eğlence2`', inline: true },//SadmaNN
      { name: '**Yetkili(2)**', value: '`!yetkili2`', inline: true },//SadmaNN
      { name: '**Bot**', value: '`!bot`', inline: true },//SadmaNN
      { name: '**Emoji**', value: '`!emojiyardım`', inline: true },//SadmaNN
      { name: '**Dil**', value: '`!dil`', inline: true },//SadmaNN
   
  //SadmaNN//SadmaNN
    )	.setTimestamp()//SadmaNN
      .setDescription('**[Destek Sunucusu](https://discord.gg/8FVXKfkXBC)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=723926897477681276&scope=bot&permissions=805314622)** **•** **[Oy ver](https://top.gg/bot/723926897477681276/vote)** **•** **[Website](https://darkplacebotwebsite.glitch.me/)**')
    .setFooter(`İsteyen ${message.author.tag}`, client.user.avatarURL())//SadmaNN
  //SadmaNN
  message.channel.send(exampleEmbed);//SadmaNN
  }//SadmaNN

    if(dil === "EN") { // TÜRKÇE DİL
    
 const exampleEmbed = new Discord.MessageEmbed()//SadmaNN
	.setAuthor(`${client.user.username} Yardım Menüsü  `, 'https://cdn.discordapp.com/attachments/739930997029863485/818874030303215618/1615303942623.png', 'https://top.gg/bot/723926897477681276')//SadmaNN
	.setThumbnail('https://cdn.discordapp.com/attachments/739930997029863485/818874030303215618/1615303942623.png')//SadmaNN
	.addFields(//SadmaNN//SadmaNN
    { name: '**User**', value: '`!user`', inline: true },//SadmaNN
    { name: '**Fun**', value: '`!fun`', inline: true },//SadmaNN
    { name: '**Authorized**', value: '`!authorized`', inline: true },//SadmaNN
    { name: '**User(2)**', value: '`!user2`', inline: true },//SadmaNN
    { name: '**Fun(2)**', value: '`!fun2`', inline: true },//SadmaNN
    { name: '**Authorized(2)**', value: '`!authorized2`', inline: true },//SadmaNN
    { name: '**Bot**', value: '`!bot`', inline: true },//SadmaNN
    { name: '**Emoji**', value: '`!helpemoji`', inline: true },//SadmaNN
    { name: '**Language**', value: '`!lang`', inline: true },//SadmaNN
 
//SadmaNN//SadmaNN
	)	.setTimestamp()//SadmaNN
    .setDescription('**[Support Server](https://discord.gg/8FVXKfkXBC)** **•** **[İnvite](https://discord.com/oauth2/authorize?client_id=723926897477681276&scope=bot&permissions=805314622)** **•** **[Vote](https://top.gg/bot/723926897477681276/vote)** **•** **[Website](https://darkplacebotwebsite.glitch.me/)**')
  .setFooter(`Requested by ${message.author.tag}`, client.user.avatarURL())//SadmaNN
//SadmaNN
message.channel.send(exampleEmbed);//SadmaNN
}//SadmaNN
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help","y","yardim","Y"], 
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'taslak', 
  usage: 'dil-test'
};
