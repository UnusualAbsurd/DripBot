const Discord = require('discord.js')


module.exports = {
    name: 'endticket',
    description: "ends the ticket",
    permissions: ["ADMINISTRATOR"],

    execute(client, message, args, Discord){

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Only a moderator can end a ticket!")

        if(message.member.hasPermission("ADMINISTRATOR")) message.channel.delete()
    }

}