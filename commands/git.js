const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'github',
    aliases: ["git"],
    permissions: ["BAN_MEMBERS"],

 async execute(client, message, args, Discord) {

  const emb = new MessageEmbed()
   .setTitle("Github Repository")
   .setDescription(`Github link : 
                    https://github.com/UnusualAbsurd/DripBot 

                    ** Developer ** 
                    TheRealAbsurdChad#0610 < Contact for help`) 
   .setThumbnail('https://cdn.discordapp.com/avatars/746721583804055634/a_f8d4b0395641df8c1a7d0e26bd121ea0.gif?size=4096')
   .setColor("BLACK")

   message.channel.send(emb);

 }
}

      