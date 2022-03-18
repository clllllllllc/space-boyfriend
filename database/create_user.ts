import mangoes from 'mongoose';

const createUser = async (schema: any, id: string, nickname: string) => {
    await new schema({
        id:id,
        nickname: nickname,
        currency: 0,
        items: {},
        properties: {},
        storedSettings: {},
        
    }).save();
}

export default createUser;