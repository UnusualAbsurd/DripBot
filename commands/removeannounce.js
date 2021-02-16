const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'removeannounce',
    permissions: ["SEND_MESSAGES"],

    execute(client, message, args, Discord) {
        
        // you guys can change it to anything you guys want , make sure to get the correct role id

       
   
   
           message.member.roles.remove('808929448014381116'); // added role
           
           const emb = new MessageEmbed()
        .setTitle('Announcement Role Added!')
        .setDescription('To add back announcements ping role , do **.addannounce**')
        .addField('User ID', message.author.id)

        .setColor(0x4289fc)

        message.channel.send(emb)
        
        

    }

}
