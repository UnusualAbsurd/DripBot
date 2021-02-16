const { MessageEmbed } = require("discord.js")

module.exports = {
    name: `admincommands`,
    aliases: ["help_admin"],
    permissions: ["MANAGE_MESSAGES"],

    execute(message, args, cmd, client, Discord) {


        const emb = new MessageEmbed()
        .setTitle('admin commands')
        .setDescription(` Admin CMD 
                          
                          .ban [ bans the user from server ]
                          
                          .kick [ kicks the user from server ]
                          
                          .slowmode [sets slowmode in a text channel ]
                          ** { aliases : .slow } **
                          
                          .say [ announce a message through the bot ]
                          ** { aliases : .announce } ** 

                          .endTicket [ ends the ticket // delete the ticket channel \\ ]

                          .claimt [ claims the ticket ]

                          .purge [ deletes messages ] `)

                          .setColor("RED")


                          

                          message.channel.send(emb);

    }
}