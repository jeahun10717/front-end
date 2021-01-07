const express = require('express');
const pug = require('pug');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views')

app.get('/',(req,res)=>{
    res.render('main')
})

app.use('/views', express.static('views'))

app.listen(9900, ()=>{
    console.log('server port 9900 is listening');
})