const db = require('quick.db')

exports.run = async (client, message) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
  const voiceChannel = message.member.voice.channel;
  if (!message.member.voice.channel) { return message.channel.send("Bu komutu kullanabilmek için botun sesli kanalda olması gerekiyor"); }

  const permissions = message.member.voice.channel.permissionsFor(message.guild.me);
  if (permissions.has("CONNECT") === false) { return message.channel.send("Odaya girmek için yetkim yok"); }
  message.member.voice.channel.leave();
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ['katıl',"leave"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "çık",
  description: "Bulunduğunuz odaya giriş yapar",
  usage: "gir",
  usageDelim: "",
};