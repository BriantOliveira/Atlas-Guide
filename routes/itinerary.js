/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Itinerary Router File
 ******************************************/
 var models = require('../models');

 module.exports = function(app) {


    //  app.get('/search', function (req, res) {
    //      models.Itinerary.findAll({
    //          where: {
    //             //  Cityname: {
    //             //      like: "%" + req.query.term + "%"
    //             //  }
    //          }
    //      }).then((itinerary) => {
    //          res.json({ msg: 'intinery working' });
    //      });
    //  });

    app.get('/new', function (req, res, next) {
        res.send("test")
        });


    app.get('/:id', function (req, res, next) {
        models.Itinerary.findById(req.params.id).then(itinerary => {
            res.json({msg: 'show itinerary'});
        });
    });

    app.post('/itinerary', function(req, res, next) {
        models.Itinerary.create(req.body).then((itinerary) => {
            res.send('this is all itinerary');
        })
    });


};
