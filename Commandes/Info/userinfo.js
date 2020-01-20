const Discord = require('discord.js');
const moment = require("moment");

const status = {
    online: "En ligne",
    idle: "Absent",
    dnd: "Ne pas déranger",
    offline: "Déconnecté(e) / Invisible"
};

exports.run = (Cremza, message, args,FgYellow) => {
    console.log(FgYellow, `[INFO]userinfo exécuté.`)

    var permissions = [];
    var acknowledgements = '-';
   
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
    
    if(message.member.hasPermission("KICK_MEMBERS")){
        permissions.push("Expulser les membres");
    }
    
    if(message.member.hasPermission("BAN_MEMBERS")){
        permissions.push("Bannir les membres");
    }
    
    if(message.member.hasPermission("ADMINISTRATOR")){
        permissions.push("Administrateur");
    }

    if(message.member.hasPermission("MANAGE_MESSAGES")){
        permissions.push("Gérer les messages");
    }
    
    if(message.member.hasPermission("MANAGE_CHANNELS")){
        permissions.push("Gérer les channels");
    }
    
    if(message.member.hasPermission("MENTION_EVERYONE")){
        permissions.push("Mentionner @everyone");
    }

    if(message.member.hasPermission("MANAGE_NICKNAMES")){
        permissions.push("Gérer les surnoms");
    }

    if(message.member.hasPermission("MANAGE_ROLES")){
        permissions.push("Gérer les rôles");
    }

    if(message.member.hasPermission("MANAGE_WEBHOOKS")){
        permissions.push("Gérer les webhooks");
    }

    if(message.member.hasPermission("MANAGE_EMOJIS")){
        permissions.push("Gérer les emojis");
    }

    if(permissions.length == 0){
        permissions.push("Pas de permissions trouvés.");
    }


    const embed = new Discord.RichEmbed()
        .setDescription(`<@${member.user.id}>`)
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setColor(randomColor)
        .setFooter(`ID: ${message.author.id}`)
        .setThumbnail(member.user.displayAvatarURL)
        .setTimestamp()
        .addField("Statut",`${status[member.user.presence.status]}`, true)
        .addField('Rejoint le : ',`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        .addField("Créé le : ",`${moment(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        .addField("Permissions: ", `${permissions.join(', ')}`, true)
        .addField(`Rôles [${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`, true)
        
    message.channel.send({embed});

}
