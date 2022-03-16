import { Message, MessageAttachment } from 'discord.js'

export default {
    callback: (message: Message, ...args: string[]) => {
        console.log(args[0])
        const value = parseInt(args[0]!)
        const item = whatWillJingYangSend(value)
        console.log(typeof(item["file"]))
        if (item["file"] != 0){
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
    // this contains every funny thing that Jing Yang said between 01/03/2022 - 16/03/2022
    // icbb to add more, I might automate this process someday, but this is what we got for now...
    const sendOptions = [
        "fuck of",
        "shut up pial of shit",
        "i better not see ur face tomorrow cunt",
        "r u calling me dumb cunt",
        "oi fuck off generic_human.jpg",
        "what the fuck did you just call me",
        "go jerk each other off in your DMs bro quit being cringe in a public channel",
        "yeah fuck of bio nerd monoclonal antibiotic prion",
        "dont gaslight me",
        "This is 1984. This is oppression. This is censorship. Not wearing masks.",
        "Delete that",
        "Far right nazi supporters",
        "juggling deez nuts",
        "Dumbest shit ever",
        "Grok learning moee like  cock learning",
        "Fuck me",
        "This is why ur a virgin",


    ]

    // I dont know why I didn't thought of this ealier!!!!!!!!
    // Anyways, this will be moved into a JSON file eventually...
    const sendOptions2 = [
        {
            content: "fuck of",
            file: 0,
        },

        {
            content: "shut up pial of shit",
            file: 0,
        },

        {
            content: "i better not see ur face tomorrow cunt",
            file: 0,
        },

        {
            content: "r u calling me dumb cunt",
            file: 0,
        },
        
        {
            content: "oi fuck off generic_human.jpg",
            file: 0,
        },

        {
            content: "what the fuck did you just call me",
            file: 0,
        },

        {
            content: "go jerk each other off in your DMs bro quit being cringe in a public channel",
            file: 0,
        },

        {
            content: "yeah fuck of bio nerd monoclonal antibiotic prion",
            file: 0,
        },

        {
            content: "dont gaslight me",
            file: 0,
        },

        {
            content: "This is 1984. This is oppression. This is censorship. Not wearing masks.",
            file: 0,
        },

        {
            content: "Delete that",
            file: 0,
        },

        {
            content: "Far right nazi supporters",
            file: 0,
        },

        {
            content: "juggling deez nuts",
            file: 0,
        },

        {
            content: "Dumbest shit ever",
            file: 0,
        },

        {
            content: "Grok learning moee like  cock learning",
            file: 0,
        },

        {
            content: "Fuck me",
            file: 0,
        },

        {
            content: "This is why ur a virgin",
            file: 0,
        },

        {
            content: "heres the camp schedule if you havent seen it yet",
            file: "img\\camp_schedule.png",
        },
    
    ]

    let k = (value - 1) % 18
    return sendOptions2[k]
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