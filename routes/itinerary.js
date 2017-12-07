/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Itinerary Router File
 ******************************************/
 var models = require('../models');

 module.exports = function(app) {

    app.get('/itinerary/new', function (req, res, next) {
        res.render("builditinerary",  {mapLocation: 'https://maps.googleapis.com/maps/api/js?key='+process.env.GMAPKEY+'&callback=initMap'});
        });

    app.post('/itinerary', function(req, res, next) {
        models.Itinerary.create(req.body).then((itinerary) => {
            res.send('this is all itinerary');
        })
    });

    app.get('/navs', function(req, res){
        res.render('testmap', {mapLocation: 'https://maps.googleapis.com/maps/api/js?key='+process.env.GMAPKEY})
    })

};
