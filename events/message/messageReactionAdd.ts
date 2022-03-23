import { MessageEmbed, Message, WebhookClient } from "discord.js";

export default {
    name: "messageReactionAdd",
    execute(message: any) {
        console.log("ahhh")
        const log = new MessageEmbed()
        .setColor("#696969")
        .setDescription(`${message.content}\n   `.slice(0, 4096));

        new WebhookClient({url:"https://discord.com/api/webhooks/954651011530768384/ilYJuLzXQPNomijla9ZzwfTkI1SapVGuuA322yFd41csLMdmtw1DRZDtjnxya6rmuYK6"}).
        send({embeds: [log]});
        if(message.content == ':star:'){
            message.reply("ahhh")
        }

        
    }
}