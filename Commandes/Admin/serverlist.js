const Discord = require('discord.js')

exports.run = (Cremza, message, args, FgYellow) => {
    console.log(FgYellow,`[INFO] Commande ex�cut�e : .serverlist`)
    if (message.author.id !== '319428319462293506') return message.channel.send("Dommage, commande r�serv�e pour le propri�taire !");
    message.author.send(bot.guilds.map(r => r.name + ` | **${r.memberCount} membres**.`))
}