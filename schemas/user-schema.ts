import mangoes from 'mongoose';

const userSchema = new mangoes.Schema({
    id: String,
    nickname: String,
    currency: Number,
    items: Object,
    properties: Object,
    storedSettings: Object,

})

export default mangoes.model('user', userSchema);
