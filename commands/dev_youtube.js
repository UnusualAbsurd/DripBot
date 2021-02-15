const { MessageEmbed } = require("discord.js")

module.exports = { 
    name: 'yt',
    aliases: ["youtube", "creatorchannel"],
    permissions: ["SEND_MESSAGES"],

    execute(client, message, args, Discord) {

        const emb = new MessageEmbed()
      .setTitle("Dev's youtube channel")
      .setDescription(`Youtube channel : 
      https://www.youtube.com/channel/UCkX4qnWQBWIacXOjZM7qjBA 
                       
                       Devs : 
                       TheRealAbsurdChad#0610 < Contact for help `)
        .setThumbnail('https://cdn.discordapp.com/attachments/779627309804027934/810769103944941568/JOTARBARK.jpg')
        .setColor(0xFF0000)

        message.channel.send(emb);

}
}