const { MessageEmbed } = require("discord.js")

module.exports = {
    name: `admincmd`,
    aliases: ["admin"],
    permissions: ["MANAGE_MESSAGES"],

    execute(client, message, args, Discord) {

        const emb = new MessageEmbed()
        .setTitle('admin commands')
        .setDescription(` Admin CMD 
                          .ban [ bans the user from server ]
                          
                          .kick [ kicks the user from server ]
                          
                          .slowmode [sets slowmode in a text channel ]
                          ** { aliases : .slow } **
                          
                          .say [ announce a message through the bot ]
                          ** { aliases : .announce } ** `)

                          message.channel.send(emb);

    }
}