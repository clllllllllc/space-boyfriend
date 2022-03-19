import { MessageEmbed, Message, WebhookClient } from "discord.js";

export default {
    name: "messageUpdate",

    execute(oldMessage: any, newMessage: any) {
        if(oldMessage.author.bot) return;

        if(oldMessage.content === newMessage.content) return;

        const count = 1950;

        const original = oldMessage.content.slice(0, count) + (oldMessage.content.length > 150 ? "..." : "");
        const edited = newMessage.content.slice(0, count) + (newMessage.content.length > 150 ? "..." : "");

        const log = new MessageEmbed()
        .setColor("#696969")
        .setDescription(`${newMessage.url} by ${newMessage.author} was edited. \n
        Original:\n${original}\n
        New:\n ${edited}
        `.slice(0, 4096));

        new WebhookClient({url:"https://discord.com/api/webhooks/954651011530768384/ilYJuLzXQPNomijla9ZzwfTkI1SapVGuuA322yFd41csLMdmtw1DRZDtjnxya6rmuYK6"}).
        send({embeds: [log]}).catch((err) => console.log(err));

    }
}