import DiscordJS, { Intents, MessageAttachment } from 'discord.js'
import mango from "./mango"
import 'dotenv/config'
import testSchema from './schemas/test-schema'

// create bot client
const client = new DiscordJS.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
})

// bot ready 
client.on('ready', async () => {
    console.log("BOT READY")

    let handler = require('./command-handler')
    if (handler.default) handler = handler.default
    
    handler(client)

    const connectToMangoDB = async () => {
        await mango().then((mongoose) => {
            try {
                console.log("Connected")
            } finally {
                console.log("lol")
            }
        }
        )
    }

    connectToMangoDB()

    await new testSchema({
        message: "hello"
    }).save()
})

client.login(process.env.TOKEN)