import mangoes from 'mongoose';
import mango from "../../mango";
import userSchema from '../../schemas/user-schema';

export default {
    name: "ready",
    once: true,

    async execute(client: any){
        console.log("BOT READY");

        let handler = require('../../command-handler');
        if (handler.default) handler = handler.default;
        handler(client);
    
        //client.user.SetActivity("AHHHHHHHHHHHHHH BOT IS ON");
        const connectToMangoDB = async () => {
            await mango().then(async (mangoes) => {
                try {
                    console.log("Connected");
                    console.log(typeof(userSchema));
                } finally {
                    console.log("lol");
                }
            }
        )}
        connectToMangoDB();
    }
}