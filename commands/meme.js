
const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');



module.exports = {
    name: 'meme',
    description: 'Sends meme',
    permissions: ["SEND_MESSAGES"],

   async execute(client, message, args, Discord) {

     const  subReddits = ["MEME", "DankMemes", "meirl", "wholesomememes"];
     const random = subReddits[Math.floor(Math.random() * subReddits.length)];

     const img = await randomPuppy(random);
     
     const embed = new MessageEmbed()
     .setColor('RANDOM')
     .setImage(img)
     .setTitle(`From /r/${random}`)
     .setURL(`https://reddit.com/r/${random}`);

     message.channel.send(embed)

    }

}