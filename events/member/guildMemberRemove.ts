import { MessageEmbed, WebhookClient, GuildMember, Guild } from "discord.js"

export default {
    name: "guildMemberRemove",
    async execute(member: GuildMember) {
        const { user, guild } = member;

        const welcomer = new WebhookClient({
            id: "954573079156256889",
            token: "G6FMnVlRy7zg2FLKr_r2546KPCb7xR61C2rH-yPKQzvlVeFBQ8sMeHeFQdXx-JqA2HOc"
        })

        const welcome = new MessageEmbed()
        .setColor("BLUE")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512})!)
        .setThumbnail(user.avatarURL({dynamic :true, size: 512})!)
        .setDescription(`Killed ${member} ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`)

        welcomer.send({embeds: [welcome]})
    }

}