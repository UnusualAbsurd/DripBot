
const { MessageEmbed } = require("discord.js");


module.exports = {
    name: 'addgiveaway',
    permissions: ["SEND_MESSAGES"],

    execute(message, args, cmd, client, Discord) {
        
        // you guys can change it to anything you guys want , make sure to get the correct role id


if(message.member.roles.cache.has('808929448857436171')) {  // if he has the role already it will say "You already have the role" and it will not give them the role
    message.channel.send('You already have the giveaway ping role');



} else {

   message.member.roles.add('808929448857436171'); // added role 

   const emb = new MessageEmbed()
   .setTitle('Giveaway Role Added!')
   .setDescription('Added giveaway ping role! You will be pinged if a giveaway started!')
   .addField('User ID', message.author.id)

   .setColor(0x4289fc)

   message.channel.send(emb)




   
   
}  
   
   

   

   

}
}