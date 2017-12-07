/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Itinerary Router File
 ******************************************/
 var models = require('../models');

 module.exports = function(app) {

    app.get('/new', function (req, res, next) {
        res.send("test")
        });

    app.post('/itinerary', function(req, res, next) {
        models.Itinerary.create(req.body).then((itinerary) => {
            res.send('this is all itinerary');
        })
    });


};
