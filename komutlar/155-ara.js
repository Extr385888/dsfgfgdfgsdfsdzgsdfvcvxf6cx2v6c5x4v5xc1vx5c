const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
   const msg = message

    var en = require("../language/ingilizce");
    var tr = require("../language/türkçe");

    var dil = db.fetch(`language_${msg.guild.id}`)

if(dil == "en") {
    var lang = en
} 
if(!dil) {
  var lang = tr
} 
var dil = db.fetch(`language_${msg.guild.id}`) 
 ////////////////////////////////////////////////////////
let gayseks = args        
if(!gayseks) return message.channel.send(`ne yazıcam ben orsopu`)
       let sevismek = args.join(' ').replace(/a/g,"A̶͈̔ ̷̱̟͠")
		.replace(/b/g,"B̶͓̌")
		.replace(/c/g," ̴̞͑C̸̣͒ ̸̳́")
		.replace(/ç/g,"Ç̵͇͌")
		.replace(/d/g," ̸̤͊D̴̘́")
		.replace(/e/g," ̶̟̐Ĕ̸̡ ̶̘͝")
		.replace(/f/g," ̶̘͝F̵̱̈́ ̸̩͋")
		.replace(/g/g,"G̶̗͆")
		.replace(/ğ/g,"Ğ̵̪͘ ̴̱̈́")
		.replace(/h/g,"̴̈́Ḧ̷̲́ ̵̬̆")
		.replace(/i/g,"İ̵͙͂ ̵̩̇")
		.replace(/ı/g,"̶͎̒I̶͔̅ ̴͖̊")
		.replace(/j/g,"J̸̫͗")
		.replace(/k/g,"K̴͙͊")
		.replace(/l/g,"L̴̥̚")
		.replace(/m/g,"M̷͓͘")
		.replace(/n/g,"N̵̛̺")
		.replace(/o/g,"O̴̤̐")
		.replace(/ö/g,"Ö̷̱̋")
		.replace(/p/g,"P̷̖͘")
		.replace(/r/g,"R̷͚̚")
		.replace(/s/g,"Ș̴͠")
		.replace(/ş/g,"Ş̸̪̔")
		.replace(/t/g,"T̸̰̈́")
		.replace(/u/g,"Ṷ̶̏")
		.replace(/ü/g,"Ü̵͕͛")
		.replace(/v/g,"V̸̺̏")
		.replace(/y/g,"Y̶͕̐")
        .replace(/z/g,"Z̷̞͝")
       message.channel.send(sevismek)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "cursed",
  description: "azdım ve gayseks",//halil
  usage: "!tasak "
};