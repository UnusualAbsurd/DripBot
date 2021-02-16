const { MessageEmbed } = require("discord.js")


module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp', 'profilepic', 'av'],
    description: 'Return a user(s) avatar picture!',
    permissions: ["SEND_MESSAGES"],
    //Use your own execute parameters
    async     execute(message, args, cmd, client, Discord) {


        const user = message.mentions.users.first() || message.author;
        message.channel.send(
           new MessageEmbed()
           .setFooter(`${user.tag}'s avatar!`)
           .setColor("#e4101f")
           .setImage(user.displayAvatarURL({size: 4096, dynamic: true}))

        )
    }
}