/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Signup Router File
 ******************************************/
var models = require('../models');
var jwt = require('jsonwebtoken')

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


     app.post('/login', function(req, res, next) {
        User.findOne({ username: req.body.username }, "+password", function (err, user) {
        if (!user) { return res.status(401).send({ message: 'Wrong username or password' }) };
        user.comparePassword(req.body.password, function (err, isMatch) {
            if (!isMatch) {
                return res.status(401).send({ message: 'Wrong Username or password' });
            }

            var token = jwt.sign({ _id: user._id }, process.env.SECRETKEY, { expiresIn: "60 days" });
            res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });

            res.render('login')
      });
    }).catch(function(err) {
      if(err){
          console.log(err)
      }
    })
  });

 };
