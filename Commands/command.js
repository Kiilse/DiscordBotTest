module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setURL('https://youtube.com')
        .setDescription('This is a embed for the server rules')
        .addFields(
            {name: 'Rule 1', value: 'Be Nice'},
            {name: 'Rule 2', value: 'Follow twitch'},
            {name: 'Rule 3', value: 'ne memems'},
        )
        .setImage('https://static5.depositphotos.com/1000270/486/i/600/depositphotos_4869272-stock-photo-bengal-cat-in-light-brown.jpg')
        .setFooter({
            text: "test"
            })

        message.channel.send({embeds: [newEmbed]});
    }
}