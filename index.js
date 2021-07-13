const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');



//used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');
const passportGoogle = require('./config/passport-google-oauth2-strategy');


const flash = require('connect-flash');
const customMware = require('./config/middleware');


app.use(express.urlencoded({extended:true}));

const path = require('path');
app.use(cookieParser());
app.use(express.static('assets'));

app.use('/uploads', express.static(__dirname + '/uploads'));



app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
    
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


app.use(flash());
app.use(customMware.setFlash);



app.use('/', require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log('error in running server ',err  );
    }
    console.log('yup my server is running on port',port);


});