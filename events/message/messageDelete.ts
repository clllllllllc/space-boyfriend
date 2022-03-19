import { MessageEmbed, Message, WebhookClient } from "discord.js";

export default {
    name: "messageDelete",

    execute(message: any) {
        if(message.author.bot) return;

        const log = new MessageEmbed()
        .setColor("#696969")
        .setDescription(`${message.url} by ${message.author} was deleted. \n
        This is what it said:\n${message.content ? message.content : "None"}\n
        `.slice(0, 4096));

        if(message.attachments.size >= 1) {
            log.addField(`Attachments:`, `${message.attachment.map((a: { url: any; }) => a.url)}`, true)
        }

        new WebhookClient({url:"https://discord.com/api/webhooks/954651011530768384/ilYJuLzXQPNomijla9ZzwfTkI1SapVGuuA322yFd41csLMdmtw1DRZDtjnxya6rmuYK6"}).
        send({embeds: [log]}).catch((err) => console.log(err));

    }
}