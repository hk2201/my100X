import { client } from "..";

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    await client.connect();
    const insertQuery = "INSERT INTO todos (userId, title, description) VALUES ($1, $2, $3) RETURNING *;"; // Use RETURNING to get the inserted row
    const values = [userId, title, description]; // Pass parameters in an array
    const res = await client.query(insertQuery, values); // Pass query and values to client.query()
    console.log('Insertion success:', res.rows[0]); // Output inserted todo object
    return res.rows[0]; // Return the inserted todo object
}

/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const updateQuery = "UPDATE todos SET done = true WHERE id = $1 RETURNING *;"; // Use RETURNING to get the updated row
    const values = [todoId]; // Pass parameters in an array
    const res = await client.query(updateQuery, values); // Execute the update query
    console.log('Update success:', res.rows[0]); // Output updated todo object
    return res.rows[0]; // Return the updated todo object
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const selectQuery = "SELECT * FROM todos WHERE userId = $1;"; // Select todos for a specific user
    const values = [userId]; // Pass parameters in an array
    const res = await client.query(selectQuery, values); // Execute the select query
    console.log('Todos:', res.rows); // Output todos array
    return res.rows; // Return todos array
}
