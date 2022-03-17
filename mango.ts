 import mongoose from 'mongoose'
import 'dotenv/config'

export default async () => {
    await mongoose.connect(process.env.MANGO || '', {
        keepAlive: true
    })
}
