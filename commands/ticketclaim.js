const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    name: 'claimt',
    aliases: ["claim"],

    permissions: ["MANAGE_MESSAGES"],


    execute(client, message, args, Discord) {
        
  const emb = new MessageEmbed()
  .setTitle('Ticket Claimed ✅')
  .addField('Claimed by', message.author.username)
  .addField('Mod ID', message.author.id)
  .setColor(0x4289fc)

message.channel.send(emb);
        
    }
}