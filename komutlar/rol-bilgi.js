const emran = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = async (client, msg, args) => {
      if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
      let prefix = ayarlar.prefix


    let role = msg.mentions.roles.first() || msg.guild.roles.cache.get(args[0]) || msg.guild.roles.cache.find(role => role.name === args.join(' '));
  
  var hata = new emran.MessageEmbed()
  .setColor("#36393F")
  .setDescription(`Lütfen Bir Rol Etiketleyin Örnek: \`${prefix}rolbilgi @Üye\``);
  if(!role) return msg.channel.send(hata);

        let hex = role.hexColor.toString().slice(1)
        let embed = new emran.MessageEmbed()
            .setThumbnail(`http://colorhexa.com/${hex}.png`)
            .addField("Rol İsmi", role.name, false)
            .addField(`Rol ID`, role.id, false)
            .addField(`Rol Tag`, role, false)
            .addField(`Etiketlenebilir mi?`, role.mentionable ? '\n Evet' : 'Hayır', false)
            .setColor(role.hexColor)
            .addField("Renk", role.hexColor, false)
            .addField("Kaç Kullanıcıda Bulunuyor", role.members.size, false)
       .setFooter('Bu komutu kullanan kullanıcı ' + msg.author.tag, msg.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTimestamp(role.createdAt)
        msg.channel.send(embed)
    }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['rol-info','rolinfo','rolbilgi'],
 permLevel: 0
};

exports.help = {
 name: 'rol-bilgi',
 description: 'Bir Rol Hakkında Bilgi Verir.',
 usage: 'rol-bilgi'
};
