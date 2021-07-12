const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
app.use(express.urlencoded({extended:true}));

const path = require('path');
app.use(cookieParser());
app.use(express.static('assets'));
app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.use('/', require('./routes'));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));



app.listen(port,function(err){
    if(err){
        console.log('error in running server ',err  );
    }
    console.log('yup my server is running on port',port);


});