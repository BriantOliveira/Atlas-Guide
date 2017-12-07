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
             res.redirect('/');
             //return res.status(200).send({ message: 'Created user' });
         })
        })
      });
    });

     app.get('/login', function(req, res) {
         res.render('login');
     });


    app.post('/login', (req, res) => {
         models.User.findOne({
                 email: req.body.email}).then(function(data) {
           bcrypt.compare(req.body.password, data.password, function(err, result) {
                if(err) {
                     res.status(400)
                     console.log(err)
                } else {
                    res.redirect('/')
                }
            });

    });
});


 // LOGOUT
 app.get('/logout', function(req, res) {
   res.clearCookie('nToken');
 });
};
