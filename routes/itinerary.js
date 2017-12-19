/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Itinerary Router File
 ******************************************/
 let models = require('../models');
 const fetch = require("node-fetch")
 let Handlebars = require('handlebars');
 let fs = require('fs');

module.exports = function(app) {

    app.get("/itinerary/new", (req, res)=>{
        if(!req.user){
            return res.redirect("/login");
        };

        builderOptions = {
            mapWebAPILocation: 'https://maps.googleapis.com/maps/api/js?key='+process.env.GMAPKEY+'&callback=initMap', 
            gmapkey: process.env.GMAPKEY,
            mapInitialCoords: {lat:"37.810548", lng:"-122.477041"}
        };
        res.render("builditinerary",  builderOptions);
    });

    app.post('/itinerary/new', function(req, res) {
        models.Itinerary.create(req.body).then((itinerary) => {
            res.send('this is all itinerary');
        });
    });

    //used for ajax request
    app.get('/locate/city/:lat/:lon', function(req, res){
        if(!req.user){
            return res.redirect("/login");
        }; 
        let latitude = req.params.lat
        let longitude = req.params.lon
        url_query = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&key="+process.env.GKEY     
        
        fetch(url_query).then((results)=>{
            return results.json();
        }).then((json)=>{
            //load handlebars file as text
            // fs.readFile( __dirname + '/../views/partials/venues.hbs', function (err, data) {
            //     if (err) {
            //         console.log(err.message); 
            //     }
            //     //console.log(data.toString());
            //     stringTemplate = data.toString();
            //     compiledTemplate = Handlebars.compile(stringTemplate);
            //     //console.log(json.results)
            //     returnedHTML = compiledTemplate({results:json.results});
            //     res.send(returnedHTML);
            // });
            // console.log("Connection status:", json.status);
            res.send(json)
        }).catch((err)=>{
            console.log("fetch error:", err.message);
          })  
    })

    app.get('/search/:query', function(req, res){
        if(!req.user){
            return res.redirect("/login");
        };
        query = req.params.query;

        let gglurl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+query+"&key="+process.env.GKEY;

        //console.log("googling for you:", gglurl)
        fetch(gglurl).then((googleresults)=>{
            return googleresults.json();
        }).then((json)=>{
            //load handlebars file as text
            fs.readFile( __dirname + '/../views/partials/venues.hbs', function (err, data) {
                if (err) {
                    console.log(err.message); 
                }
                //console.log(data.toString());
                stringTemplate = data.toString();
                compiledTemplate = Handlebars.compile(stringTemplate);
                //console.log(json.results)
                returnedHTML = compiledTemplate({results:json.results});
                res.send(returnedHTML);
            });
           console.log("Connection status:", json.status);
        }).catch((err)=>{
          console.log("fetch error:", err.message);
        })
    })

};
