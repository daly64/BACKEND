

const express = require('express')
const app = express()
app.listen(3000)
app.get('/', (req, res) => {
    res.send('server work !')
    console.log('server work !');
})
app.get('/getAll', (req, res) => {
    res.send('get work !')
    console.log('get work !');
})
app.post('/add', (req, res) => {
    res.send('post work !')
    console.log('post work !');
})
app.put('/update', (req, res) => {
    res.send('update work !')
    console.log('update work !');
})
app.delete('/delete', (req, res) => {
    res.send('delete work !')
    console.log('delete work !');
})