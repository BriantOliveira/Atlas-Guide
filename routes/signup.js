/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Signup Router File
 ******************************************/
var models = require('../models');

 module.exports = function(app){
     //SINGUP
     app.get('/signup', function (req, res) {
         res.render('signup', {});
     });

     app.post('/', function (req, res) {
        models.User.create(req.body).then((user) => {
            console.log(User)
            console(req.body)
            res.render('/', { user: user })
        });
     });
 };
