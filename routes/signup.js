/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Signup Router File
 ******************************************/
var models = require('../models');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
 module.exports = function(app){


     //SIGNUP
     app.get('/signup', function (req, res) {
         res.render('signup', {});
     });

     app.post('/signup', (req, res) => {
    // hash the password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        console.log("hash " + hash);
          var newUser = {
            first: req.body.first,
            last: req.body.last,
            email: req.body.email,
            password: hash
        };
         models.User.create(newUser, {w:1}, function(err) {
             return res.status(200).send({ message: 'Created user' });
         })
        })
      });
    });

     app.get('/login', function(req, res) {
         res.render('login');
     });


    app.post('/login', (req, res) => {
     var userToFind = req.body.email;
     models.User.findOne({email: userToFind }).then(function(user) {
       bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
         if (isMatch) {
           var token = jwt.sign({ id: user.id }, process.env.SECRETKEY, { expiresIn: "60 days" });
           res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
           res.status(200).send({message: "Successfully logged in"});
           console.log("Logged in!")

         } else {
             console.log(err)
           return res.status(401).send({ message: 'Wrong username or password' });
         }
       })
     })
 });

 // LOGOUT
 app.get('/logout', function(req, res) {
   res.clearCookie('nToken');
 });
};
