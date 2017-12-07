/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Explore Router File
 ******************************************/
var models = require('../models');

const getVenues = function(options){

}

module.exports = function(app) {

    app.get('/search', function(req, res, next) {

        // models.venues.findAll({
        //     where: {
        //         name: {
        //             like: "%" + req.query.term + "%"
        //         }
        //     }
        // }).then((venues) => {
        //     res.json({ msg: 'This is working' });
        // })

        res.render('builditinerary');

    });

    app.get('/guest/:id', function(req, res, next) {
        models.venues.findById(req.params.id).then(venues => {
            res.json({ msg: 'This is working' });
        })
    });

};

