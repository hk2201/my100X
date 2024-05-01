import { useState, useEffect } from 'react'

import './App.css'

function App() {
    const [todos, setTodods] = useState([])

    useEffect(() => {
        fetch('https://sum-server.100xdevs.com/todos').then(async (res) => {
            const json = await res.json()
            setTodods(json.todos)
        })
    }, [])

    return (
        <>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    title={todo.title}
                    description={todo.description}
                />
            ))}
        </>
    )
}

function Todo({ title, description }) {
    return (
        <div>
            <h1>{title}</h1>
            <h4>{description}</h4>
        </div>
    )
}

export default App
