/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Explore Router File
 ******************************************/
var models = require('../models');

// const getVenues = function(options){
//
// } // <-- Is this for the itinerary?


module.exports = function(app) {

    app.get('/explore', function(req, res, next) {
        res.render('explore');

    });

    app.get('/guest/:id', function(req, res, next) {
        models.venues.findById(req.params.id).then(venues => {
            res.json({ msg: 'This is working' });
        })
    });

};
