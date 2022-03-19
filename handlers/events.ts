import events from '../validation/eventNames';
import glob from 'glob';
import { promisify } from 'util';

const ascii = require('ascii-table');
// weird promisify thing that does not work, or I might just be stupid
// type Callback<A> = (args: A) => void

// const promisify = <T, A>(fn: (args: T, cb: Callback<A>) => void): ((args: T) => Promise<A>) =>
//     (args: T) => new Promise((resolve) => {
//           fn(args, (callbackArgs) => {
//           resolve(callbackArgs);
//     });
//   });

const PG = promisify(glob);
const eventHandler = async (client: any) => {
    const table = new ascii("Events Loaded");
    (await PG (`${process.cwd()}/events/*/*.ts`)).map(async (file: any) => {
        const event = require(file)['default'];
        if(!events.includes(event.name) || !event.name) {
            const l = file.split("/");
            console.log(l)
            await table.addRow(`${event.name || "MISSING"}`, `Event name is either invalid or missing: ${l[6] + `/` + l[7]}`);
            return;

        }

        if(event.once) {
            client.once(event.name, (...args: any) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args: any) => event.execute(...args, client));
        }

        await table.addRow(event.name, "YEAH!!!!!!!");
    })

    console.log(table.toString());

}

export default eventHandler;