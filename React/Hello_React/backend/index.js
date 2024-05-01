const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());
app.use(cors());

app.get('/todos', async (req, res) => {
    const allTodos = await todo.find({});

    res.json({ allTodos });
})

app.post('/todo', async (req, res) => {
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);

    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "Somethings Wrong"
        })
        return;
    }

    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json({
        msg: "Todo Created"
    })

})

app.put('/completed', async (req, res) => {
    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);

    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "Somethings Wrong"
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo is Done"
    })
})

app.listen(3000, () => {
    console.log("Server Started");
})