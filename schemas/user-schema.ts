import mangoes from 'mongoose';

const userSchema = new mangoes.Schema({
    id: String,
    nickname: String,
    currency: Number,
    items: Array,
    properties: Array,
    storedSettings: Array,

})

export default mangoes.model('user', userSchema);
