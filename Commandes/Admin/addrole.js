exports.run = (Cremza, message, args,FgYellow,prefix) =>{
    console.log(FgYellow,`[INFO]addrole exécuté.`)
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    
    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")){
        message.channel.send(":octagonal_sign: | Tu n'as pas la permission !");
    }

    else{

        if(!rMember) 
            return message.channel.send(":warning: | Utilisateur introuvable.");

        let role = args.join(" ").slice(22);
        if(!role) 
            return message.channel.send(":warning: | Le rôle n'est pas spécifié.");

        let gRole = message.guild.roles.find('name', role);
        if(!gRole) 
            return message.channel.send(":warning: | Rôle introuvable.");


        if(rMember.roles.has(gRole.id)) 
            return message.channel.send(":warning: | Rôle déjà acquis !");

        else{
            rMember.addRole(gRole.id).catch(console.error);
            
            try{
                rMember.send(`Tu as désormais le rôle ${gRole.name}.`);
                message.channel.send(`L'utilisateur ${rMember} a désormais le rôle ${gRole.name}`);
            }
            catch(e){
                console.log(e.stack);
                message.channel.send(`<@${rMember.id}>, possède désormais le rôle ${gRole.name}.`)
            }
        }
    }
}
