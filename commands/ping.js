const { MessageEmbed, Message } = require("discord.js")





module.exports = {
    name: 'ping',
    description: "this is a ping cmd",
    permissions: ["SEND_MESSAGES"],

execute(client, message, args, Discord){

    

    message.channel.send(':test_tube: Calculating ping...');

        
        
        
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Ping')
        .setColor('RANDOM')
        .setDescription(`
        :desktop: Latency is ${Date.now() - message.createdTimestamp}ms. 
        :robot: API Latency is ${Math.round(client.ws.ping)}ms`); 

    message.channel.send(embed)   
    


    
    
    


    




    }
    


}

    
    


    

    
  