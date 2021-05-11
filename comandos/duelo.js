const Discord = require('discord.js')

const moment = require('moment')
moment.locale('pt-br')

module.exports = {
    
    name: "duelo",
    aliases : ['d'],
    description: "Lute com seu parceiro",

    run: (client, message, args) => {
    var list = [
        'https://media.giphy.com/media/11zNrvy5Xh5gFa/giphy.gif',
        'https://media.giphy.com/media/K7NHFtsLG4nqU/giphy.gif',
        'https://media.giphy.com/media/UMoWGUZhuSIVO/giphy.gif',
        'https://media.giphy.com/media/8fQy8B1CxFY9q/giphy.gif',
        'https://gfycat.com/snarlingdelayedbellfrog',
        'https://gfycat.com/elasticpleasedaltiplanochinchillamouse',
        'https://gfycat.com/untimelymajorconch',
    
    ];
    
     var rand = list[Math.floor(Math.random() * list.length)];
     let user = message.mentions.users.first() || client.users.cache.get(args[0]);
     if (!user) {
         return message.reply('lembre-se de mencionar');
     }
    
    
     let pEmbed = new Discord.MessageEmbed()
     
     .setDescription(`💂‍♂️ ${message.author} **Estão duelando** ${user}`,)
     .setImage(rand)
     .setThumbnail()
     .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
     .setColor("RANDOM").setTimestamp()
    
     message.channel.send(pEmbed).then((msg) => {
        {
      }

      var list = [
        'https://i.imgur.com/kUXpDMi.gif',
        'https://i.imgur.com/p9WtnXX.gif',
        'https://i.imgur.com/5sPnKLu.gif',
        'https://i.imgur.com/YkrEkbF.gif',
        'https://i.imgur.com/mNEHfJ0.gif',
        'https://i.imgur.com/YOQgZqY.gif',
        'https://i.imgur.com/YbNv10F.gif',
        'https://i.imgur.com/e0ep0v3.gif',
    ];
    
     var rands = list[Math.floor(Math.random() * list.length)];
     let user = message.mentions.users.first() || client.users.cache.get(args[0]);
      
        let beijovolta = new Discord.MessageEmbed()
    
         .setDescription(`💏 ${user} **Beijou de volta** ${message.author}`,)
         .setImage(rands)
         .setThumbnail()
         .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
         .setColor("RANDOM").setTimestamp()

                 
          


    })
    },
    
    
    conf: {},
  
}