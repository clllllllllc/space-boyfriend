import { Client, CommandInteraction, MessageEmbed } from 'discord.js'
import commands from '../../handlers/commands';

export default {
    name: "interactionCreate",
    /**
     * 
     * @param interaction 
     * @param client 
     */
    async execute(interaction: CommandInteraction, client: any) {
        if(interaction.isContextMenu() || interaction.isCommand()) {
            console.log(interaction.commandName)
            const command = client.commands.get(interaction.commandName);
            console.log("command:", command)

            try{
                command.execute(interaction, client);
            } catch {
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