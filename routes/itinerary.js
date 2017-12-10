/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Itinerary Router File
 ******************************************/
 var models = require('../models');
 const fetch = require("node-fetch")

 module.exports = function(app) {

    app.get("/itinerary/new", (req, res)=>{
        if(!req.user){
            return res.redirect("/login")
        };

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

    app.get('/search/:venueType/:city', function(req, res){


        venueType = req.params.venueType
        city = req.params.city
        query = venueType + "+in+" + city
        let gglurl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+query+"&key="+process.env.GKEY

        //console.log("googling for you:", gglurl)
        fetch(gglurl).then((googleresults)=>{
            return googleresults.json()
        }).then((json)=>{
          //console.log(json)
           res.send(json)

           console.log("Connection status:", json.status)
        }).catch((err)=>{
          console.log("fetch error:", err.message)
        })
    })

};

let verifyUserLoggedIn = (req, res)=>{
    if(!req.user){
        res.redirect("/login");
    };
   
};
