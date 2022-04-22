module.exports = {
    name: 'checkPerms',
    description: "this is a checkPerms command",
    execute(message, args) {
        if (message.member.permissions.has("KICK_MEMBERS")) {
            message.channel.send("you can kick members");
        } else {
            message.channel.send("u nub");
        } 
    }
}