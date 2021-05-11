const Discord = require('discord.js')

const moment = require('moment')
moment.locale('pt-br')

module.exports = {
    
    name: "beijar",
    aliases : ['b'],
    description: "De um beijo em seu parceiro",

    run: (client, message, args) => {
    var list = [
        'https://i.imgur.com/kUXpDMi.gif',
        'https://i.imgur.com/p9WtnXX.gif',
        'https://i.imgur.com/5sPnKLu.gif',
        'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif',
        'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
        'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
        'https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif',
        'https://media.giphy.com/media/oHZPerDaubltu/giphy.gif',
        'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
        'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
        'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
        'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif',
        'https://media.tenor.com/images/924c9665eeb727e21a6e6a401e60183b/tenor.gif'
    
    ];
    
     var rand = list[Math.floor(Math.random() * list.length)];
     let user = message.mentions.users.first() || client.users.cache.get(args[0]);
     if (!user) {
         return message.reply('lembre-se de mencionar');
     }
    
    
     let pEmbed = new Discord.MessageEmbed()
     
     .setDescription(`💏 ${message.author} **Acabou de Beijar** ${user}`,)
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