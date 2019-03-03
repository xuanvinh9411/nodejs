const express = require('express')
const ejs     = require('ejs')
const Tinh     = require('./tinh')


const app = express();

app.get('/',(req,res)=>{
    res.send('Hello world')
});

app.get('/user/:id',(req,res)=>{
    const id = req.params.id
    res.send({id})
})

app.get('/a',(req,res)=>{
   res.sendFile(__dirname + '/views/a.html');
})

const port = process.env.PORT || 3000

app.get('/:a/:tinh/:b',(req,res)=>{
    const {a,tinh,b} = req.params
    const tinhtoan = new Tinh(a,b,tinh)
    console.log(tinhtoan.getResult())
})

app.listen(port,()=>{
    console.log('Server connect sucssecd' + port)
})