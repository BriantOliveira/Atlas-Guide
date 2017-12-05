/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Signup Router File
 ******************************************/
var models = require('../models');

 module.exports = function(app){
     //SINGUP
     app.get('/signup', function (req, res) {
         res.render('signup');
     });

     app.post('/signup', function (req, res) {
         console.log(models);
        models.Users.create(req.body).then(function(user) {
            res.redirect('/')
        });
     });
 };
