import { Message, MessageEmbed, CommandInteraction } from 'discord.js'
import mangoes from 'mongoose'
import "../../events/client/ready"

export default {
    name: "status",
    description: "check status of database",
    async execute(interaction: CommandInteraction, client: any) {
        const response = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`**Database**: ${switchConnection(mangoes.connection.readyState)}`);
        console.log(mangoes.connection.readyState)
        interaction.reply({embeds: [response]})
    }
}

function switchConnection(val: Number) {
    let status = " ";
    switch(val) {
        case 0: status = "DISCONNECTED"; break;
        case 1: status = "CONNECTED"; break;
        case 2: status = "AHHHHHHHHHH :)"; break;
        case 3: status = "WAAAAAAAAAAA :("; break;
    }
    return status
}

