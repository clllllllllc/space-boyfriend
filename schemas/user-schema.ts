import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    nickname: String,
    cockSize: String,
    virginity: Boolean,
    cum: Number,
    items: Array,
    storedSettings: Array,
    storedSettings2: Array,

})