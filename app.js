const express = require('express');
const bodyParser = require('body-parser');

const Todo = require('./models/todo');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//fetch all todos
app.get('/', (req, res, next) => {
  const todos = [];
  Todo.findAll()
    .then(todos => {
      const myTodo = [];
      for (todo of todos) {
        myTodo.push({ title: todo.title, description: todo.description });
      }
      res.status(200).json({ ...myTodo });
    })
    .catch(() => {
      console.log('no todos found ');
    });
});

app.listen(8080);
