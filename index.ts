import DiscordJS, { Intents, MessageAttachment } from 'discord.js';
//import mango from "./mango";
import 'dotenv/config';
//import testSchema from './schemas/test-schema';
//import userSchema from './schemas/user-schema';
import eventHandler from './handlers/events';

// create bot client
const client = new DiscordJS.Client({
    intents: 32767,
});

const event = eventHandler(client);

// // bot ready 
// client.on('ready', async () => {
//     console.log("BOT READY")

//     let handler = require('./command-handler')
//     if (handler.default) handler = handler.default
    
//     handler(client)

//     const connectToMangoDB = async () => {
//         await mango().then(async (mangoes) => {
//             try {
//                 console.log("Connected")
//                 console.log(typeof(userSchema))
//             } finally {
//                 console.log("lol")
//             }
//         }
//         )
//     }

//     connectToMangoDB()

//     await new testSchema({
//         message: "hello"
//     }).save()
// })

client.login(process.env.TOKEN);
