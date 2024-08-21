const express=require('express');
const path=require('path')
const app=express();
const router=require('./router/index')
const bodyParser = require('body-parser')

const PORT=5008;
const myPath=path.join(__dirname,'/views')

app.set('view engine','ejs');
app.set('views',myPath);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(myPath));


app.use('/',router);

app.listen(PORT,(err)=>{
    if(!err) console.log(`server running ${PORT}`);
})