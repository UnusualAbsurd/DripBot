const { MessageEmbed, Message } = require("discord.js")





module.exports = {
    name: 'ping',
    aliases: ["Ping"],
    description: "this is a ping cmd",
    permissions: ["MANAGE_MESSAGES"],

    execute(message, args, cmd, client, Discord) {


    

    message.channel.send(':test_tube: Calculating ping...');

        
       
        
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Ping')
        .setColor('RANDOM')
        .setDescription(`
        :desktop: Latency is ${Date.now() - message.createdTimestamp}ms. 
        :robot: API Latency is ${Math.round(client.ws.ping)}ms`);

message.channel.send(embed);

    
    
    


    




    }
    


}

    
    


    

    
  