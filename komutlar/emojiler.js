const Discord = require('discord.js')
const db = require('quick.db')


exports.run = (bot, message, args) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return bot.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new Discord.MessageEmbed()
      .setTitle(`${message.guild.name} Adlı Sunucunun Emojileri:`)
      .setDescription(
        `**Hareketli [${Animated}]**:\n${EmojisAnimated}\n\n**Normal [${EmojiCount}]**:\n${Emojis}\n\n**Toplam emoji sayısı [${OverallEmojis}]**`
      )
      .setColor(0x000000);
    message.channel.send(Embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["emoji"],
    permLevel: 0,
    kategori: 'sunucu'
}

exports.help = {
    name: 'emojiler',
    description: 'Sunucuda bulunan emojileri gösterir.',
    usage: 'emojiler'
}