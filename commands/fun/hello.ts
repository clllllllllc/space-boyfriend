import { Message, MessageAttachment } from 'discord.js'
import messages from './messages.json'

export default {
    callback: (message: Message, ...args: string[]) => {
        console.log(args[0])
        const value = parseInt(args[0]!)
        const item = whatWillJingYangSend(value)
        console.log(typeof (item["file"]))
        if (item["file"] != 0) {
            const file = new MessageAttachment(item["file"] as any)
            message.reply({
                content: item["content"],
                files: [file as any],
            })

        } else {
            message.reply({
                content: item["content"],
            })
        }

    },
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