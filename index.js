const express = require('express');


const port = process.env.PORT || 8000;
const app = express();

// app.use('/', require('./routes'));


app.set('view engine','ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.static('assets'));

 app.get('/',function(req,res){
     return res.render('home');
 });


app.listen(port,function(err){
    if(err){
        console.log('error in running server ',err  );
    }
    console.log('yup my server is running on port',port);


});