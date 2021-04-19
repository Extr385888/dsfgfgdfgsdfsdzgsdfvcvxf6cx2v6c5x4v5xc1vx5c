const Discord = require("discord.js");
const db = require('quick.db')
exports.run = (client, message, args, member) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
  let hata = args.slice(0).join(" ");
  let kanal = client.channels.cache.get('778971770136297492')
    if (!hata) {
    return message.channel.send(
      "Bulduğun hatayı ve nasıl bulduğun şeklinde yazarmısın?"
    ); }
const yazıkkafana = new Discord.MessageEmbed()
  .setColor("0x36393F")
  .addField("Bir Hata Bildirildi!", `Bildiren: ${message.author.tag} Bildirdiği Hata: ${hata}`)
kanal.send(yazıkkafana)
  message.channel.send('Hata Kurucuma Bildirdim En Kısa Süre İçerisinde Düzeltilecek Teşekkürler!')
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bildir","report-error"],
    permLevel: 0
}

exports.help = {
    name: "hata-bildir",
    description: "kodçevirme",
    usage: "kodçevirme"
}
