module.exports = {
    name: 'kick',
    description: "this is a kick command",
    execute(message, args, client) {
        const Guilds = client.guilds.cache.get("962222883197825045");
        Guilds.members.fetch().then(
            members.forEach(member => {
                console.log(member.roles)
            })
        );
    }
}