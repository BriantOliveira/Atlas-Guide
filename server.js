/*******************************************
 *  Atlas Guide
 *      Your Source for excellent travel
 *  v. 1.0.0 Beta
 ******************************************/
require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const favicon = require('serve-favicon')
const hbs = require('express-handlebars')
const jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
const path = require('path')
const fileUpload = require('express-fileupload');

//Instantiate express
const app = express()

// use default options
app.use(fileUpload());

const PORT = process.env.PORT || 3000

/****************************************************
 *  SQL Connection
 ***************************************************/
const Sequelize = require('sequelize');
const sequelize = new Sequelize('atlasguideme', process.env.DBUSER, null, { dialect: 'postgres', logging: false });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err.message);
  });

/****************************************************
 *  Check for login token on every request
 ***************************************************/
let verifyAuthentication = (req, res, next) => {
    if (typeof req.cookies.jwtToken === 'undefined' || req.cookies.jwtToken === null) {
      req.user = null;
    } else {
      var token = req.cookies.jwtToken;

      //Synchronous verification
      try{
        decodedToken = jwt.verify(token, process.env.SECRETKEY);
        //console.log("***Authenticate***");
        req.user = decodedToken.id;
      }catch(err){
        console.log("Authentication Error:", err.message);
      };
    };
    next();
  };

let verifyUserLoggedIn = (req, res)=>{
    if(!req.user){
        res.redirect("/");
    };
    next();
};

/****************************************************
 *  Add Middlewarez
 ***************************************************/

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(verifyAuthentication)

// Setup handlebars view engine and pass in parameters
app.engine('hbs', hbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');

// Set up a static public directory
app.use(express.static('./public'))

// Load Routes
require('./routes/router.js')(app);
require('./routes/signup.js')(app);
require('./routes/itinerary.js')(app);
require('./routes/explore.js')(app);
require('./routes/user.js')(app);
require('./routes/attraction.js')(app);
require('./routes/tour.js')(app);
require('./routes/venues.js')(app);
require('./routes/nightlife.js')(app);

// Add 404 Error page routing
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Redirect to 404 page
app.use(function (err, req, res, next) {
  if (err.status == 404) {

    //do logging and user-friendly error message display
    res.redirect('/404.html');

  };
});

// Listen on port number
app.listen(PORT, function () {
    console.log('Atlas listening on port', PORT);
});
