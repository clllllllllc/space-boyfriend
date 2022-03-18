 import mangoes from 'mongoose';
import 'dotenv/config';

export default async () => {
    await mangoes.connect(process.env.MANGO || '', {
        keepAlive: true
    });
}
