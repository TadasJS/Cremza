const Discord = require('discord.js')

exports.run = (Cremza, message, args, FgYellow) => {
    console.log(FgYellow,`[INFO] Commande exécutée : .serverlist`)
    if (message.author.id !== '319428319462293506') return message.channel.send("Dommage, commande réservée pour le propriétaire !");
    message.author.send(bot.guilds.map(r => r.name + ` | **${r.memberCount} membres**.`))
}