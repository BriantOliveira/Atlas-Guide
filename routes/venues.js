/*******************************************
 *  Atlas Guide
 *      Your Source for travel Venues
 *      Router File
 ******************************************/
 const models = require('../models');
 const jwt = require('jsonwebtoken');
 const bcrypt = require('bcrypt');
 const auth = require('../auth.js');

 module.exports = function(app) {


     //INDEX
    app.get('/restaurants', (req, res) => {
        if(!req.user) {
            return res.redirect("/login");
        }
        console.log(req.user)
        res.render('restaurant')
    })

    //SHOW
    // app.get('/restaurants/:id' (req, res) => {
    //     const userId = req.params.id;
    //     models.Venue.findById(userId).then((venue) => {
    //         res.send("restaurant show")
    //     })
    // });


    //CREATE
    app.post('/restaurants/new', (req, res) => {
        models.Venue.create(req.body).then((venue) => {
            res.status(200);
            res.json({msg: 'Restaurant was created successfully...'});
        }).catch((err) => {
            if(err){
            res.status(400);
            res.json({msg: 'Error could not create new restaurant'});
            }
        })
    })


    //UPDATE
    app.put('restaurants/:id/edit', (req, res) => {
        const userId = req.params.id;
        models.Venue.update(venueId).then((venue) => {
            res.status(200);
            res.json({msg: 'Venue updated successfully...'});
        }).catch((err) => {
            if(err){
                res.status(400);
                res.json({msg: 'Could not update...'})
            };
        });
    });


    //DELETE
    app.delete('/restaurants/:id', (req, res) => {
        const userId = req.body.params;
        models.Venue.destroy(venueId).then((venue) => {
            res.status(200);
            res.json({ msg: 'successfully deleted...'});
        });
    });


 };
