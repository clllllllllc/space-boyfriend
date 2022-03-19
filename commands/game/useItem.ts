import {CommandInteraction, MessageEmbed} from "discord.js"

import findUser from "../../database/find_user"
import createUser from "../../database/create_user"
import userSchema from '../../schemas/user-schema'

export default{
    name: "use",
    description: "use item",
    options:[
        {
            name: "name",
            description: "item name",
            required: true,
            type: "STRING",
        },
        {
            name: "target",
            description: "target user",
            required: true,
            type: "STRING",
        },
        {
            name: "name",
            description: "item name",
            required: true,
            type: "STRING",
        }
    ],

    async execute(interaction: CommandInteraction, client: any) {

    }
}