/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Itinerary Router File
 ******************************************/
 var models = require('../models');

 module.exports = function(app) {

    app.get('/itinerary/new', function (req, res, next) {
        res.render("builditinerary",  {mapLocation: 'https://maps.googleapis.com/maps/api/js?key='+process.env.GMAPKEY+'&callback=initMap', gmapkey: process.env.GMAPKEY});
        });

    app.post('/itinerary', function(req, res, next) {
        models.Itinerary.create(req.body).then((itinerary) => {
            res.send('this is all itinerary');
        })
    });

    app.get('/navs', function(req, res){
        res.render('testmap', {mapLocation: 'https://maps.googleapis.com/maps/api/js?key='+process.env.GMAPKEY})
    })


    app.get('/search', function(req, res){
        jsonObj = {

        }
    })

    app.get('/search/:venueType/:city', function(req, res){
        venueType = req.params.venue
        city = req.params.city
        query = venueType + "+in+" + city
        let gglurl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+query+"&key="+process.env.GKEY

        console.log("googling it for you")
        fetch(gglurl).then((googleresults)=>{
            console.log("fetching...")
            return googleresults.json()
        }).then((json)=>{

           res.send(json)
        //    console.log(Object.keys(json.results))
           json.results.forEach((result)=>{
               console.log(result.name)
           })

           console.log("status:", json.status)
        }).catch((err)=>{
            console.log(err.message)
        })

    })

};
