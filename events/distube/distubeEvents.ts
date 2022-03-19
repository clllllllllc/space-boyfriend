import client from "../../index"
import { MessageEmbed } from 'discord.js'

const status = (queue: any) =>
  `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(', ') || 'Off'}\` | Loop: \`${
    queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This Song') : 'Off'
  }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
client.distube
  .on('playSong', (queue: any, song: any) => queue.textChannel.send({embeds: [new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`| Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${
        song.user
      }\n${status(queue)}`)
]}))

  .on('addSong', (queue: any, song: any) => queue.textChannel.send({embeds: [new MessageEmbed()
    .setColor("GREEN")
    .setDescription( `| Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`)
]}))

  .on('addList', (queue: any, playlist: any) => queue.textChannel.send({embeds: [new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`| Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`)
]}))
  .on('error', (channel: any, e: any) => {
    channel.send({embeds: new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`| An error encountered: ${e.toString().slice(0, 1974)}`)
    })
    console.error(e)
  })
  .on('empty', (channel: any) => channel.send({embeds: new MessageEmbed().setColor("BLUE").setDescription('Voice channel is empty! Leaving the channel...')}))
  .on('searchNoResult', (message: any, query: any) =>
    message.channel.send({embeds: new MessageEmbed().setColor("BLUE").setDescription(`| No result found for \`${query}\`!`)})
  )
  .on('finish', (queue: any) => queue.textChannel.send({embeds: new MessageEmbed().setColor("BLUE").setDescription("`| No result found for \`${query}\`!`")}))