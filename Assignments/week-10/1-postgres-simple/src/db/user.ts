import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    await client.connect();
    const insertQuery = "INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *;"; // Use RETURNING to get the inserted row
    const values = [username, password, name]; // Pass parameters in an array
    const res = await client.query(insertQuery, values); // Pass query and values to client.query()
    console.log('User created:', res.rows[0]); // Output inserted user object
    return res.rows[0]; // Return the inserted user object
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const selectQuery = "SELECT * FROM users WHERE id = $1;"; // Select user by ID
    const values = [userId]; // Pass parameters in an array
    const res = await client.query(selectQuery, values); // Execute the select query
    console.log('User:', res.rows[0]); // Output user object
    return res.rows[0]; // Return user object
}
