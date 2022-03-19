import perms from "../validation/permissions";
import Client from "discord.js";
import glob from 'glob';
const ascii = require('ascii-table');
import { promisify } from 'util';

const PG = promisify(glob);

/**
 * @param {Client} client
*/

export default async (client: any) => {
    const table = new ascii("Loaded Commands");

    let commandsArray: any[] = [];

    (await PG(`${process.cwd()}/commands/*/*.ts`)).map(async (file) => {
        const command = require(file)["default"];

        if(!command.name) return table.addRow(file.split("/")[7], "MISSING NAME");

        if(!command.description) return table.addRow(command.name, "MISSING DESCRIPTION");

        if(command.permissions) {
            if(perms.includes(command.permission)) command.defaultPermissions = false;
            else return table.addRow(command.name, "Invalid permissions");
        }
        console.log(client.command)
        client.commands.set(command.name, command);
        commandsArray.push(command);

        await table.addRow(command.name, "SUCCESS!!!!");
    });
    console.log(table.toString());
    console.log("ran commands.ts");

    // PERMISSIONS CHECK //

    client.on("ready", async () => {
        const mainGuild  = await client.guilds.cache.get("805705765868273666")

        mainGuild.commands.set(commandsArray).then(async (command: any) => {
            const roles = (commandName: any) => {
                const cmdPerms = commandsArray.find((c) => c.name === commandName).permissions;
                if(!cmdPerms) return null;

                return mainGuild.roles.cache.filter((r: any) => r.permissions.has(cmdPerms));
            }

            const fullPermissions = command.reduce((acc: any, r: any) => {
                const role = roles(r.name);
                if(!role) return acc;

                const permissions = role.reduce((a: any, r: any) => {
                    return [...a, {id:r.id, type: "ROLE", permissions: true}]
                }, []);

                return [...acc, {id: r.id, permissions: true}]
            }, []);

            await mainGuild.commands.permissions.set({ fullPermissions });
        });
    });
}