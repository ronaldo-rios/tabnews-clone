import { Client } from 'pg';

async function query(queryObj) {
    const client = new Client({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT
    });
    await client.connect();
    const result = await client.query(queryObj);
    await client.end();
    return result;
}

export default {
    query: query
}