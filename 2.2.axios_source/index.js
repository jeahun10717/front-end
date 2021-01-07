const express = require('express');
const pug = require('pug');
const axios = require('axios');

const app = express();
const port = 2200;

const testArr = {
    client1 : {
        id: 'jeahun',
        pw: '1234'
    },
    client2 : {
        id: 'LiaLi',
        pw: '123123'
    }
}

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req,res)=>{
    res.render('main')
})

app.get('/login', (req,res)=>{
    res.render('login')
})

app.listen(port, ()=>{
    console.log(port, ': is listening on server');
})