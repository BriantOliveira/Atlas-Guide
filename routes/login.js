/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Login Router File
 ******************************************/
 var models = require('../models');

 module.exports = function(app) {
    app.get('/login', function(req, res, next) {
        models.User.findAll().then((Users) => {
            res.json({msg: 'This is the login page'});
            res.status(200)
            //res.render('profile', { Users: Users})
        })

    });
    //Login validation
    app.post('login', function (req, res, next) {
        User.findOne({ username: req.body.username }, "+password", function(err, User) {
            if(!User) {return res.status(401).send({ message: "Wrong username or password" })};
            User.comparePassword(req.body.password, function(err, isMatch) {
                if(!isMatch) {
                    return res.status(401).send({ message: 'Wrong username or password' });
                }

                var token = jtw.sign({ _id: user._id }, process.env.SECRET, { expires: "60 days "});
                res.cookies('nToken', token, { maxAge: 90000, httpOnly: true })
                res.redirect('/')
            });
        });
    });
 };
