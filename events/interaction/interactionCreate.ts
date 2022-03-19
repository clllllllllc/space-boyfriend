import { Client, CommandInteraction, MessageEmbed } from 'discord.js'
import commands from '../../handlers/commands';

export default {
    name: "interactionCreate",
    /**
     * 
     * @param interaction 
     * @param client 
     */
    async execute(interaction: CommandInteraction, client: any, agrs: Array<any>) {
        if(interaction.isCommand()) {
            console.log(interaction.commandName)
            const command = client.commands.get(interaction.commandName);
            command.execute(interaction, client);
            if(!command) {
                client.commands.delete(interaction.commandName)
                return interaction.reply({embeds: [
                new MessageEmbed()
                .setColor("AQUA")
                .setDescription("ERROR!!!!!!!!!!!!")
            ]});
        }
    }
}
}