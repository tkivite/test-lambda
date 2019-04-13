const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello world!'))
app.get('/users', (req, res) => res.send('You are looking for users. Aren\'t you!'))

module.exports = app;