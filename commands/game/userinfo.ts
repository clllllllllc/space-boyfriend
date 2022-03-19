import {ContextMenuInteraction, MessageEmbed} from "discord.js"

import findUser from "../../database/find_user"
import createUser from "../../database/create_user"
import userSchema from '../../schemas/user-schema'
export default {
    name: "userinfo",
    type: "USER",
    permission: "ADMINISTRATOR",

    async execute(interaction: ContextMenuInteraction) {
        
        const target = await interaction.guild!.members.fetch(interaction.targetId);

        if(!await findUser(userSchema, target.user.id)) await createUser(userSchema, target.user.id, target.user.tag);
        const dbinfo = await findUser(userSchema, target.user.id);
        console.log("db:", dbinfo);

        const Response = new MessageEmbed()
        .setColor("RED")
        .setAuthor(target.user.tag, target.user.avatarURL({dynamic : true, size: 512})!)
        .setThumbnail(target.user.avatarURL({dynamic : true, size: 512})!)
        .addField("ID", `${target.user.id}`, true)
        .addField("Roles", `${target.roles.cache.map(r => r).join(" ").replace("@everyone", " ") || "None"}`)
        .addField("Database data", `${dbinfo}`)
        interaction.reply({embeds: [Response]});
   }
}