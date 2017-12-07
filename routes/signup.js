/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Signup Router File
 ******************************************/
let models = require('../models')
let jwt = require('jsonwebtoken')
let User = require('../models/user')
let bcrypt = require('bcrypt')

 module.exports = function(app){


     //SINGUP
     app.get('/signup', function (req, res) {
         res.render('signup', {});
     });

     app.post('/signup', function (req, res) {
        models.User.create(req.body).then((user) => {
            res.redirect('/')
        }).catch(function(err) {
            if(err){
                console.log(err);
            }
        })
     });


     app.get('/login', function(req, res) {
         res.render('login');
     });


    app.post('/login', (req, res) => {
     var userToFind = req.body.username;
     models.User.findOne({ where: {email: userToFind } }).then(function(user) {
       bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
         if (isMatch) {
           var token = jwt.sign({ id: user.id }, process.env.SECRETKEY, { expiresIn: "60 days" });
           res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
           res.status(200).send({message: "Successfully logged in"});
           console.log("Logged in!")
         } else {
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
