const Discord = require('discord.js');
const config = require("./jsonFiles/config.json");
const Enmap = require("enmap");
const Cremza = new Discord.Client();
const fs = require('fs');
const prefix = config.prefix

Cremza.config = config;

const reset = "\x1b[0m"
const Bright = "\x1b[1m"
const Dim = "\x1b[2m"
const Underscore = "\x1b[4m"
const Blink = "\x1b[5m"
const Reverse = "\x1b[7m"
const Hidden = "\x1b[8m"

const FgBlack = "\x1b[30m"
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const FgYellow = "\x1b[33m"
const FgBlue = "\x1b[34m"
const FgMagenta = "\x1b[35m"
const FgCyan = "\x1b[36m"
const FgWhite = "\x1b[37m"

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
        Cremza.on(eventName, event.bind(null, Cremza));
    });
});

Cremza.commands = new Enmap();

fs.readdir("./Commandes/Musique/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./Commandes/Musique/${file}`);
    let commandName = file.split(".")[0];
    console.log(FgCyan,`Tentative de chargement de la commande ${commandName}`);
    Cremza.commands.set(commandName, props);
  });
});

fs.readdir("./Commandes/Social/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./Commandes/Social/${file}`);
        let commandName = file.split(".")[0];
        console.log(FgCyan, `Tentative de chargement de la commande ${commandName}`);
        Cremza.commands.set(commandName, props);
    });
});

fs.readdir("./Commandes/Admin/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./Commandes/Admin/${file}`);
    let commandName = file.split(".")[0];
      console.log(FgCyan,`Tentative de chargement de la commande ${commandName}`);
    Cremza.commands.set(commandName, props);
  });
});

fs.readdir("./Commandes/Utilitaires/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./Commandes/Utilitaires/${file}`);
    let commandName = file.split(".")[0];
      console.log(FgCyan,`Tentative de chargement de la commande ${commandName}`);
    Cremza.commands.set(commandName, props);
  });
});

fs.readdir("./Commandes/Info/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./Commandes/Info/${file}`);
    let commandName = file.split(".")[0];
      console.log(FgCyan,`Tentative de chargement de la commande ${commandName}`);
    Cremza.commands.set(commandName, props);
  });
});

fs.readdir("./Commandes/Jeux/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./Commandes/Jeux/${file}`);
    let commandName = file.split(".")[0];
      console.log(FgCyan,`Tentative de chargement de la commande ${commandName}`);
    Cremza.commands.set(commandName, props);
  });
});

Cremza.login(config.token);


