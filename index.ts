import { Client, Collection} from 'discord.js';
//import mango from "./mango";
import 'dotenv/config';
//import testSchema from './schemas/test-schema';
//import userSchema from './schemas/user-schema';
import eventHandler from './handlers/events';
import commandHandler from './handlers/commands';


class GoodClient extends Client {
    public commands: Collection<any, any>;

     constructor(intents: any){
          super(intents);
          this.commands = new Collection();
     }
}

// create bot client
const client = new GoodClient({
    intents: 32767,
});


const event = eventHandler(client);
const commands = commandHandler(client);

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
