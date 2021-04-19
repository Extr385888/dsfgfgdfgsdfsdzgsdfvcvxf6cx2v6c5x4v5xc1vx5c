const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join("+");

  if (!yazi) return message.channel.send(`Lütfen bir şeyler yaz!`);
  const link = `https://api.no-api-key.com/api/v2/trump?message=${yazi}`
  .replace(" ", "+")
  .replace("ı", "i")
  .replace("İ", "I")
  .replace("ğ", "g")
  .replace("Ğ", "G")
  .replace("ş", "s")
  .replace("Ş", "S")

  let ek = new Discord.MessageAttachment(link, `trump.png`);
  const embed = new Discord.MessageEmbed()
    .setTitle("İşte tweet hazır!")
    .setColor("RANDOM")
    .attachFiles(ek)
    .setImage(`attachment://trump.png`)
    .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({ dynamic: true }))
    .setTimestamp();
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "trump",
  description: "",
  usage: "trump <yazı>"
};