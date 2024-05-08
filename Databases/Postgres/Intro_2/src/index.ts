import { Client } from 'pg'
// Instead of stsring in below client we can use the variable kinda setting as well (Just for contri)
const client = new Client({
    connectionString: 'postgresql://Posts_owner:w3XPsqR8coVF@ep-mute-dust-a1u1ith5.ap-southeast-1.aws.neon.tech/Intro?sslmode=require'
})


async function createTable() {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)

    console.log(result);
}


createTable();