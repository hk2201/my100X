const { default: mongoose } = require("mongoose");
const mongoDb = require("mongoose");

mongoose.connect("mongodb+srv://admin:password1234@cluster0.86drtks.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}