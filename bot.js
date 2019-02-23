const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-help /by luckygamer#0111`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

















 
 var prefix = "-"
 
 
 
 
 
 
 
 
 
 
 
 
  
 client.on("message", message => {
  if (message.content === "-help") {
message.author.send(`**

=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=
للتقديم اكتب **-تقديم**
=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=

**`)
      message.channel.send("✔ تم ارسال الرسالة في الخاص")
  }
});










client.on('message', async message => {
	  	 	var prefix = "-";
  if(message.content.startsWith(prefix + "تقديم")) {
    await message.channel.send("**وش اسمك الحقيقي ؟**").then(e => { 
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**كم عمرك ؟**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**شو  تبيع ؟ **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('جاري التقديم ...').then(b => {
        setTimeout(() => {
  b.edit(`** :white_check_mark: سيتم الرد في اقرب وقت :white_check_mark: **`)
        },5000);
var gg = message.guild.channels.find('name', 'التقديمات')

message.channel.send("** ادفع 10الف كريديت ل luckygamer#0111و كمان@Vééééx#2227  **").then(e => { 
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`** الاسم الحقيقي :shield:   : \n ${lan}\nالعمر :\n ${md} \n شو تببع؟ :microphone2:  :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`luckygamer#0111`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})







client.login('NTI4OTc4MzU4Mzc4MTY4MzQx.D1Ks_g.tGHn2jA022-CAohi8fLoPzsdigg')
