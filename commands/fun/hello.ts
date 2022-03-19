import { Message, MessageAttachment, CommandInteraction } from 'discord.js'
import * as messages from 'D:\\Programming\\js\\space-boyfriend\\commands\\fun\\messages.json'



export default {
    name:"hello",
    description: "space boyfriend says hello to you",
    permission: "ADMINISTRATOR",
    options: [
        {
            name:"number",
            description: "enter a number",
            required: true,
            type: "INTEGER"
        }
    ],

    execute(interaction: CommandInteraction){
        const { options } = interaction

        const value = options.getInteger("number")!
        const item = whatWillJingYangSend(value)
        console.log(item)
        if (item["file"] != 0) {
            const file = new MessageAttachment(item["file"] as any)
            interaction.reply({
                content: item["content"],
                files: [file as any],
            })

        } else {
            interaction.reply({
                content: item["content"],
            })
        }

    }
    // callback: (message: Message, ...args: string[]) => {
    //     console.log(args[0])
    //     const value = parseInt(args[0]!)
    //     const item = whatWillJingYangSend(value)
    //     console.log(typeof (item["file"]))
    //     if (item["file"] != 0) {
    //         const file = new MessageAttachment(item["file"] as any)
    //         message.reply({
    //             content: item["content"],
    //             files: [file as any],
    //         })

    //     } else {
    //         message.reply({
    //             content: item["content"],
    //         })
    //     }

    // },
}

// what will Jing Yang Send???
function whatWillJingYangSend(value: number) {
    let k = (value - 1) % 18
    return messages.hello[k]
}


/* This code will not be used until Jing Yang joins the server :(.

client.on('messageCreate', (message) => {
    if (message.author.id === '563123992547033100'){
        message.reply({
            content: "fuck of",
        })
    }
})

*/