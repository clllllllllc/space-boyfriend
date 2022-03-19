import { Message,CommandInteraction } from "discord.js";

declare module "discord.js" {
    export interface Client {
        commands: Collection<unknown, Command>
    }

    export interface Command {
        name: string,
        description: string,
        execute: (interaction: CommandInteraction, args: string[]) => SomeType // Can be `Promise<SomeType>` if using async
    }
}