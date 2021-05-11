const Discord = require('discord.js');

module.exports = {
    
    name: "avatar",
    aliases : ['a'],
    description: "Veja a foto de perfil de um usuario",

    async run (client, message, args) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({ dynamic: true, format: "png", size: 1024 });


        const embed = new Discord.MessageEmbed()
        .setTitle(`Avatar de ${member.username}`)
        .setImage(avatar)
        .setColor("RANDOM")

        message.channel.send(embed);

    }
}