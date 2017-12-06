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
         res.redirect('/');
     });


  

 };
