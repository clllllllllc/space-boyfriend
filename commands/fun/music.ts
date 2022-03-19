import { CommandInteraction, MessageEmbed, Client, VoiceChannel} from 'discord.js'
import {
	joinVoiceChannel,
	createAudioPlayer,
	createAudioResource,
	entersState,
	StreamType,
	AudioPlayerStatus,
	VoiceConnectionStatus,
} from '@discordjs/voice';

export default {
    name: "music",
    description: "music thing",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "play",
            description: "Play Song",
            type: "SUB_COMMAND",
            options: [{name: "query", description: "give name pls", type: "STRING", required: true}]
        },
        {
            name: "volume",
            description: "Change volume",
            type: "SUB_COMMAND",
            options: [{name: "percent", description: "gimme number", type: "NUMBER", required: true}]
        },
        {
            name: "settings",
            description: "Select thing",
            type: "SUB_COMMAND",
            options: [{name: "options", description: "choose one cunt", type: "STRING", required: true,
            choices: [
                {name: "queue", value: "queue"},
                {name: "skip", value: "skip"},
                {name: "pause", value: "pause"},
                {name: "resume", value: "resume"},
                {name: "stop", value: "stop"},
                {name: "something", value: "something"},
                {name: "ahhhhhhhh", value: "ahhhhhhhh"},
            ]}]
        }
    ],
    async execute(interaction: CommandInteraction, client: any) {
        const { options, member, guild, channel } =  interaction;
        const vc = (member as any).voice.channel;

        if(!vc) return interaction.reply({content: "Join a vc bitch"})

        if(guild!.me!.voice.channelId && vc.id !== guild!.me!.voice.channelId) return interaction.reply({content: "Im in another channel bitch"})

        try {
            switch(options.getSubcommand()) {
                case "play" : {
                    client.distube.playVoiceChannel(vc, options.getString("query"), {textChannel: channel, member: member});
                    return interaction.reply({content: "played the song for u"})
                }
                case "volume" : {
                    const volume = options.getNumber("percent")

                    if(volume! > 100 || volume! < 0) return interaction.reply({content: "0 - 100 ok?"});

                    client.distube.setVolume(vc, volume);
                    return interaction.reply({content: "Volume changed"})
                }
                case "settings": {
                    const queue = await client.distube.getQueue(vc);
                    if(!queue) return interaction.reply({content: "no queueueueueueueuueueueu"});

                    switch(options.getString("options")) {
                        case "skip":
                            await queue.skip(vc);
                            return interaction.reply({content: "song skipped"});
                        case "stop":
                            await queue.stop(vc);
                            return interaction.reply({content: "song stopped"});
                        case "pause":
                            await queue.pause(vc);
                            return interaction.reply({content: "Song paused"})
                        case "resume":
                            await queue.resume(vc);
                            return interaction.reply({content: "Song resumed"})
                        case "queue":
                            return interaction.reply({embeds: [new MessageEmbed()
                            .setColor("PURPLE")
                            .setDescription(`${queue.songs.map(
                                (song: any, id: any) => `\n**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``)}`
                            )]});
                    }
                    return;
            }

            }


        } catch (e) {
            const error = new MessageEmbed()
            .setColor("AQUA")
            .setDescription(`Something when wroing ahhhh: ${e} `);
            return interaction.reply({embeds:[error]})
        }
    }
}