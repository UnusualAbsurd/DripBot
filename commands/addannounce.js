const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'addannounce',
    permissions: ["SEND_MESSAGES"],

    execute(client, message, args, Discord) {
        
        // you guys can change it to anything you guys want , make sure to get the correct role id

        if(message.member.roles.cache.has('ROLE ID')) { // if he has the role already it will say "You already have the role" and it will not give them the role
            message.channel.send('You already have the announcements ping role');
   
        } else {
   
           message.member.roles.add('ROLE ID'); // added role
           
           const emb = new MessageEmbed()
        .setTitle('Announcement Role Added!')
        .setDescription('Added announcements ping role! You will be pinged if there is an announcements')
        .addField('User ID', message.author.id)

        .setColor(0x4289fc)

        message.channel.send(emb)
        
        }   

    }

}
