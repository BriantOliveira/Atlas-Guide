/*******************************************
 *  Atlas Guide
 *      Your Source for travel Nightlife
 *      Router File
 ******************************************/
 const models = require('../models');
 const jwt = require('jsonwebtoken');
 const bcrypt = require('bcrypt');
 const auth = require('../auth.js');

 module.exports = function(app) {


     //INDEX
     app.get('/nightlife', (req, res) => {
        if(!req.user) {
            return res.redirect("/login");
        }
        console.log(req.user)
        res.render('nightlife')
    });


    //SHOW
    // app.get('/nightlife/:id', (res, req) => {
    //     const userId = req.params.id;
    //     models.Venue.findById(userId).then((venue) => {
    //         res.json({msg: this is the show post route....})
    //     })
    // })


    //CREATE
    app.post('/nightlife/new', (req, res) => {
        models.Venue.create(req.body).then((venue) => {
            res.status(200);
            res.json({msg: 'Successfully created...'})
        }).catch((err) => {
            if(err) {
                res.status(400);
                res.json({msg: '*Error* there was a problem on creating the post...'})
            }
        })
    })


    //UPDATE
    app.put('/nightlife/:id/edit', (req, res) => {
        const userId = req.params.id;
        models.Venue.update(venueId).then((venue) => {
            res.status(200);
            res.json({msg: 'Updated successfully!'});
        }).catch((err) => {
            if(err) {
                res.status(400);
                res.json({msg: 'Error could not update...'});
            };
        });
    });


    //DELETE
    app.delete('/nightlife/:id', (req, res) => {
        const userId = req.body.params;
        models.Venue.destroy(venueId).then((venue) => {
            res.json({msg: 'successfully deleted...'})
        });
    });


 };
