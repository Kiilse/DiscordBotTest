module.exports = {
    name: 'addRole',
    description: "this is a addRole command",
    execute(message, args) {
        if (message.member.roles.cache.has('962231774711263322')) {
            message.channel.send("Role removed!");
            message.member.roles.remove('962231774711263322').catch(console.error);
        } else {
            message.channel.send("Role add!");
            message.member.roles.add('962231774711263322').catch(console.error);
        }        
    }
}