const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", 'GUILD_PRESENCES'] })

const prefix = '-!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./Commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('test is online');
})

client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if(command === 'mod') {
        client.commands.get('mod').execute(message, args);
    } else if(command === 'addrole') {
        client.commands.get('addRole').execute(message, args);
    } else if(command === 'checkperms') {
        client.commands.get('checkPerms').execute(message, args);
    } else if (command === 'command') {
        client.commands.get('command').execute(message, args, Discord);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args, client);
    }
})


client.login('OTYyMjE5OTIwNzY1MTI0NjA4.YlEXIg.0vFaALufIM1pmgsnQJ-SccehyFQ')