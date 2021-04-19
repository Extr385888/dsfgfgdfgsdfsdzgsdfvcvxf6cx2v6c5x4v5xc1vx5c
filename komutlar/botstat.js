const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const db = require('quick.db')

require("moment-duration-format");
exports.run = async (bot, message, args) => {
    if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
  
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
 
  let msg = message
   const bunemq = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const annencilermaldır = new Discord.MessageEmbed()
  .setFooter('Dark Place İstatislik', bot.user.avatarURL())
  .addField("» **Botun Sahibi**", "```<@702463861034319974> | EmircanMADEN#0968```  ")
  .addField("»  **Geliştirici** ","```<@765570995020890182>| Mücahit OLGAÇ#4508``` ")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField("» **Toplam RAM Miktarı**","72 GB")  
  .addField("» **Çalışma süresi**", bunemq)
  .addField('» **Kullanıcılar**:', bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0))
  .addField("» **Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.cache.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ws.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
  .addField("**» Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=723926897477681276&scope=bot&permissions=805314622)", )
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/8FVXKfkXBC)", )
  .addField("**» Voteleme sayfası**", " [OYLAR MISIN?](https://top.gg/bot/723926897477681276/vote)", )
  .addField("**» Botun Websitesi**", " [Websitesine Git](https://darkplacebotwebsite.glitch.me/)", )
 
  //mayfeBot
 return message.channel.send(annencilermaldır);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i',"botstat"],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};