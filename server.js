const express = require('express')
const ejs     = require('ejs')
const app = express()
app.set('view engine','ejs')
app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.render('b');
 })

 const port = process.env.PORT || 3000
 app.listen(port,()=>{
    console.log('strating Node' + port)
})