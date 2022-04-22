module.exports = {
    name: 'mod',
    description: "this is a mod command",
    execute(message, args) {
        if (message.member.roles.cache.has('962230070678790194')) {
            message.channel.send("i'm a mod!");
        } else {
            message.channel.send("You can't use this command!");
        }        
    }
}
