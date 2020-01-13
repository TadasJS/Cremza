exports.run = (Cremza, message, args,FgYellow,FgRed) => {
    console.log(FgYellow, `[INFO]removerole exécuté.`)
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")){
        message.channel.send(":octogonal_sign: | Tu n'as pas la permission !");
    }
    
    else{

        if(!rMember) 
            return message.channel.send(":warning: | Utilisateur introuvable.");
        
        let role = args.join(" ").slice(22);
        if(!role) 
            return message.channel.send("Veuillez spécifier le rôle !");
        
        let gRole = message.guild.roles.find('name', role);
        if(!gRole) 
            return message.channel.send("Rôle introuvable.");

        if(!rMember.roles.has(gRole.id)) 
            return message.reply("Ils ne possèdent pas ce rôle..");
        
        else{
            rMember.removeRole(gRole.id).catch(console.error);
            
            try{
                rMember.send(`Tu viens de perdre le rôle ${gRole.name}.`);
                message.channel.send(`${rMember} vient de perdre le rôle ${gRole.name}.`);
                console.warn(FgRed,`Rôle retiré à ${rMember}: ${gRole.name} `)
            }
            catch(e){
                console.log(e.stack);
                message.channel.send(`RIP à <@${rMember.id}>, nous avons retiré le rôle ${gRole.name} à eux :) .`)
            }
        }
    }
}