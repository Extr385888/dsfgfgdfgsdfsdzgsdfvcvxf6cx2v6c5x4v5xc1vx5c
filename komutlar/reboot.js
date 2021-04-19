const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const db = require("quick.db")//Ϫ Halil'M#7403
require("moment-duration-format");//Ϫ Halil'M#7403
//Ϫ Halil'M#7403
exports.run = async (bot, message, args) => { //Ϫ Halil'M#7403
  if(message.author.id !== '702463861034319974') return message.channel.send("<:darkplace:818868933574262824> Bu komutu sadece sahibim kullanabilir");//Ϫ Halil'M#7403
   db.set(`reboot`, "ack")
   db.set(`rebootkanal`,message.channel.id)
   message.channel.send("Bot Yeniden Başlatılıyor! Lütfen bekleyiniz").then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 0
};
 
exports.help = {
  name: "reboot",
  description: "botu yeniden başlatır",
  usage: "!r"
};