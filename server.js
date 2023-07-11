

const express = require('express')
const app = express()
app.listen(3000, () => { console.log('server work !');})
app.get('/getAll',()=>{console.log('get work !');})
app.post('/add',()=>{console.log('post work !');})
app.put('/update',()=>{console.log('update work !');})
app.delete('/delete',()=>{console.log('delete work !');})