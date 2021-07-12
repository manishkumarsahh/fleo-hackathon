const express = require('express');
const path = require('path');


const port = process.env.PORT || 8000;
const app = express();

app.use('/', require('./routes'));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(express.static('assets'));



app.listen(port,function(err){
    if(err){
        console.log('error in running server ',err  );
    }
    console.log('yup my server is running on port',port);


});