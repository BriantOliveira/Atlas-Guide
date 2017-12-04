/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Signup Router File
 ******************************************/
 module.exports = function(app){
     //SINGUP
     app.get('/signup', function (req, res) {
         res.render('signup');
     });

    //  app.post('/signup', function (req, res) {
    //     models.User.create(req.body).then(user) => {
    //         res.redirect('/')
    //     };
    //  });
 };
