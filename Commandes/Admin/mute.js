const ms = require("ms");

exports.run = async (Cremza, message, args,FgYellow,FgGreen) => {
    console.log(FgYellow, `[INFO]mute exécuté.`)
  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply(":warning: | Utilisateur introuvable.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Impossible de le rendre muet.");
  let muterole = message.guild.roles.find(`name`, "Cremza-Mute");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Cremza-Mute",
        color: "#000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //Fin création rôle
  let mutetime = args[1];
  if(!mutetime) return message.reply(":warning: | Veuillez spécifier le temps.");

  await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> a été mute pour ${ms(ms(mutetime))}`);
    console.log(`** Utilisateur mute : ${tomute.id} pour ${ms(ms(mutetime))}`)

  setTimeout(function(){
    tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> a été unmute !`);
      console.log(FgGreen,`** Utilisateur unmute : ${tomute.id}`)
  }, ms(mutetime));

}