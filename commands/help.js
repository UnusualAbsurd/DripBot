const { MessageEmbed } = require("discord.js")

module.exports = {
    name: `Help`,
    aliases: ["help"],
    permissions: ["SEND_MESSAGES"],

   

    execute(message, args, cmd, client, Discord) {


        const emb = new MessageEmbed()
        .setTitle('Help commands')
        .setDescription(` Commands 
        .spotifysearch [ Searches spotify artist or songs ]
        
        .meme [ sends meme from reddit]
        
        .ping [ sends your ping and bot latency ]
        
        .weather [ Tells the weather in a specific city ]
        ** { aliases : .wthr } ** 
        
        .ytsearch [ search youtube videos ]

        .ticket [ create a ticket ]

        .avatar [ Sends user avatar ] `)

        .setColor("RED")

                          message.channel.send(emb);

    }
}