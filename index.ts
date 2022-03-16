import DiscordJS, { Intents, MessageAttachment } from 'discord.js'
import 'dotenv/config'

// create bot client
const client = new DiscordJS.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
})

// bot ready 
client.on('ready', () => {
    console.log("BOT READY")

    let handler = require('./command-handler')
    if (handler.default) handler = handler.default
    
    handler(client)
})

client.login(process.env.TOKEN)