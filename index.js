const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 8000;
const db = require('./config/mongoose');


app.use(express.urlencoded({extended:true}));


app.set('view engine', 'ejs');
app.set('views', './views');



app.get('/create', function(req,res){
    return res.render('addFactory');
});

// use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
 


// http://localhost:8000/factory/getfactory    ---->   get request
//http://localhost:8000/tatasteel/getfactory   ---> get request



//http://localhost:8000/factory/create    
//post request
//   form-data are- totalSales,targetSalse,tatasteel_id


//http://localhost:8000/tatasteel/create
//   form-data are- totalSales,targetSalse,factory_id
//post request


