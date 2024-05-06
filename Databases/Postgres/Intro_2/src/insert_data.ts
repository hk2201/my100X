import { Client } from 'pg';

// Async function to insert data into a table
async function insertData() {
    const client = new Client({
        connectionString: 'postgresql://Posts_owner:w3XPsqR8coVF@ep-mute-dust-a1u1ith5.ap-southeast-1.aws.neon.tech/Intro?sslmode=require'
    });

    try {
        await client.connect(); // Ensure client connection is established
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
        const res = await client.query(insertQuery);
        console.log('Insertion success:', res); // Output insertion result
    } catch (err) {
        console.error('Error during the insertion:', err);
    } finally {
        await client.end(); // Close the client connection
    }
}

insertData();