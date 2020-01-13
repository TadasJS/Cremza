exports.run = (Cremza, message, args,FgYellow,FgRed) => {
    console.log(FgYellow, `[INFO]removerole ex�cut�.`)
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")){
        message.channel.send(":octogonal_sign: | Tu n'as pas la permission !");
    }
    
    else{

        if(!rMember) 
            return message.channel.send(":warning: | Utilisateur introuvable.");
        
        let role = args.join(" ").slice(22);
        if(!role) 
            return message.channel.send("Veuillez sp�cifier le r�le !");
        
        let gRole = message.guild.roles.find('name', role);
        if(!gRole) 
            return message.channel.send("R�le introuvable.");

        if(!rMember.roles.has(gRole.id)) 
            return message.reply("Ils ne poss�dent pas ce r�le..");
        
        else{
            rMember.removeRole(gRole.id).catch(console.error);
            
            try{
                rMember.send(`Tu viens de perdre le r�le ${gRole.name}.`);
                message.channel.send(`${rMember} vient de perdre le r�le ${gRole.name}.`);
                console.warn(FgRed,`R�le retir� � ${rMember}: ${gRole.name} `)
            }
            catch(e){
                console.log(e.stack);
                message.channel.send(`RIP � <@${rMember.id}>, nous avons retir� le r�le ${gRole.name} � eux :) .`)
            }
        }
    }
}