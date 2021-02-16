
const { MessageEmbed } = require("discord.js");


module.exports = {
    name: 'addgiveaway',
    permissions: ["SEND_MESSAGES"],

    execute(message, args, cmd, client, Discord) {

        
    

   message.member.roles.remove('808929448857436171'); // added role 

   const emb = new MessageEmbed()
   .setTitle('Giveaway Role Removed')
   .setDescription('To add back giveaway ping role , do **.addgiveaway**')
   .addField('User ID', message.author.id)

   .setColor(0x4289fc)

   message.channel.send(emb)




   
   

   
   

   

   

}
}