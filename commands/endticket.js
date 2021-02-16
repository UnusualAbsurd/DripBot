const Discord = require('discord.js')


module.exports = {
    name: 'endticket',
    aliases: ["endt"],
    description: "ends the ticket",
    permissions: ["MANAGE_MESSAGES"],

    execute(message, args, cmd, client, Discord) {


        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Only a moderator can end a ticket!")

        if(message.member.hasPermission("ADMINISTRATOR")) message.channel.delete()
    }

}