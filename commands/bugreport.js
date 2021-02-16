const { execute } = require("./say");

module.exports = {
    name: "bugreport",
    aliases: ['bug', 'reportbug'],
    description: 'let users report bugs',
    permissions: ["SEND_MESSAGES"],
    async     execute(message, args, cmd, client, Discord) {

        //the channel you want the bug-reports to be send to
        const channel = client.channels.cache.get('810889485088194621')

         //look if there is a bug specified
        const query = args.join(' ');
        if(!query) return message.reply('Please specify the bug')

        
         //create an embed for the bug report
        const reportEmbed = new Discord.MessageEmbed()
        .setTitle('New Bug!')
        .addField('Author', message.author.toString(), true)
        .addField('Guild', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setColor("RANDOM")
        .setTimestamp()
        channel.send(reportEmbed);
        //send the embed to the channel
        
        message.channel.send("**Bug report has been sent!**")
    }
}
