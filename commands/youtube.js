const { MessageEmbed } = require('discord.js');
const ytsr = require('ytsr');

module.exports = {
    name: 'ytsearch',
    permissions: ["SEND_MESSAGES"],

    async execute(client, message, args, Discord) {

        const query = args.join(" ");
        if(!query) return message.channel.send('PLease provide a search');

        const res = await ytsr(query).catch(e => {
            return message.channel.send("no results");
        });

        const video = res.items.filter(i => i.type === "video" )[0];
        if (!video)             return message.channel.send("no results");


        const embed = new MessageEmbed()
        .setTitle(video.title)
        .setImage(video.bestThumbnail.url)
        .setColor(0xFF0000)
        .setDescription(`**[${video.url}](${video.url})**`)
        .setAuthor(video.author.name)
        .addField("Views", video.views.toLocaleString(), true)
        .addField("Duration", video.duration, true)

          message.channel.send(embed);



    

    



    }
}