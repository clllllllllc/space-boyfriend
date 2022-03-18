import mangoes from 'mongoose';

const schema = new mangoes.Schema({
    message: {
        type: String,
        required: true
    }
})

export default mangoes.model('testing', schema);
