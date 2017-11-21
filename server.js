/*******************************************
 *  Atlas Guide
 *      Your Source for excell 
 *  v. 1.0.0 Beta
 ******************************************/
require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const hbs = require('express-handlebars')
const jwt = require('jsonwebtoken')



//Instantiate express
const app = express()

const PORT = process.env.PORT || 3000

/****************************************************
 *  Check for login token on every request
 ***************************************************/
let verifyAuthentication = (req, res, next)=>{
    if (typeof req.cookies.userToken === 'undefined' || req.cookies.userToken === null) {
      req.user = null;
    } else {
      var token = req.cookies.userToken;
      
      //Synchronous verification
      try{
        decodedToken = jwt.verify(token, process.env.SECRETKEY)
        console.log("***Authenticate***")
        req.user = decodedToken._id
      }catch(err){
        console.log(err.message)
      }   
    }
    next()
  }


/****************************************************
 *  Add Middlewarez
 ***************************************************/

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(verifyAuthentication)
// Set up a static public directory
app.use(express.static('./public'))
// Setup handlebars view engine and pass in parameters
app.engine('hbs', hbs({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

// ERROR HANDLING
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  if (err.status == 404) {

    //do logging and user-friendly error message display
    res.redirect('/404.html');
  }
});

// Load Routes
require('./routes/router.js')(app)

// Listen on port
app.listen(PORT, function () {
    console.log('Atlas listening on port', PORT);
})