import mangoes from 'mongoose';

const findUserById = async (schema: any, id: string) => {
    const result = await schema.findOne({
        id: id
    })

    return result;
}

export default findUserById;