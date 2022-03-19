import mangoes from 'mongoose';
import findUserById from './find_user'

const createUser = async (schema: any, id: string, nickname: string) => {
    if(await findUserById(schema, id)) return
    await new schema({
        id:id,
        nickname: nickname,
        currency: 0,
        items: [],
        properties: [],
        storedSettings: [],
        
    }).save();
}

export default createUser;