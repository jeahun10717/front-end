const express = require('express');
const app = express();
const port = 3200;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('views'));

app.get('/', (req, res)=>{
    res.render('page/mainPage')
})

app.listen(port, ()=>{
    console.log(`port num : `, port, ` is listening`);
});