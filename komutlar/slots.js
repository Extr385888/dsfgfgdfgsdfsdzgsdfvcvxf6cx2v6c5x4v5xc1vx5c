const Discord = require("discord.js");
const { Command } = require("discord.js-commando");
const { stripIndents } = require("common-tags");
const db = require('quick.db')


const slots = ["🍇", "🍊", "🍐", "🍒", "🍋"];

exports.run = function(client, message) {
          if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}

var matador = slots[Math.floor(Math.random() * slots.length)];
var matador2 = slots[Math.floor(Math.random() * slots.length)];
var matador3 = slots[Math.floor(Math.random() * slots.length)];

  if (matador === matador2 && matador3 === matador) { return message.channel.send(stripIndents`**Tebrikler, kazandınız!** \n\n${matador} **:** ${matador2} **:** ${matador3}`);

  } else {
   return message.channel.send(stripIndents`**Eyvah, kaybettin!** \n\n${matador} **:** ${matador2} **:** ${matador3}`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "slots",
  description: "Slots oyunu oynatır",
  usage: "slots"
};
