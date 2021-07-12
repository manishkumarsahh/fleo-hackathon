const express = require('express');
const app = express();
const port =process.env.PORT|| 8000;



app.set('view engine','ejs');
app.set('views', './views');

app.use('/', require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log('error in running server');
    }

    console.log('server is running on port:8000');
});