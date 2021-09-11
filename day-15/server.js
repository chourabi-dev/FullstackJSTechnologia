
const express = require('express')
const { createFruit, insertListOfFruits, ListFruits, updateFruit, fruitDelete } = require('./my-modules/Fruits')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/fruits/add', (req, res) => {
     createFruit(req,res);
})

app.post('/fruits/add/many', (req, res) => {
    insertListOfFruits(req,res);
})


app.post('/fruits/update', (req, res) => {
    updateFruit(req,res);
})

app.delete('/fruits/delete', (req, res) => {
    fruitDelete(req,res);
})


app.get('/fruits/list', (req, res) => {
    ListFruits(req,res);
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})