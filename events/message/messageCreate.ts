import { MessageEmbed, Message, WebhookClient } from "discord.js";

export default {
    name: "messageCreate",
    execute(message: any) {
        if(message.author.ID == "294665359330639873"){
            message.reply("NICE job Danny nice job")
        }
    }
}