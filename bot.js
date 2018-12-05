const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("519941162489085953");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(WELCOME IN THE SERVER TGS THE GAMING SIDE :dove:), 4000)
}
});



client.login(process.env.BOT_TOKEN);
