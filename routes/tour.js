/*******************************************
 *  Atlas Guide
 *      Your Source for travel Tours
 *      Router File
 ******************************************/
const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const auth = require('../auth.js');

module.exports = function(app) {


    //INDEX
    app.get('/tours', (req, res) => {
        if(!req.user) {
            return res.redirect("/login");
        }
        console.log(req.user);
        res.render('tour')
    });


    //SHOW
    // app.get('/tours/:id' (req, res) => {
    //     const vendorId = req.params.id;
    //     models.Tour.findById(tourId).then((tour) => {
    //         res.json({msg: 'tour show'})
    //     })
    // });

    //CREATE
    app.post('/tours/new', (req, res) => {
        models.Tour.create(req.body).then((tour) => {
            res.status(200);
            res.send("created successfully!");
        }).catch((err) => {
            if(err){
                console.log("**ERROR**" + err);
                res.status(400);
            }
        })
    });

    //UPDATE
    app.put('tours/:id/edit', (req, res) => {
        const vendorId = req.body.params;
        models.Tour.update(tourId).then((tour) => {
            res.status(200)
            res.json({tour})
            console.log("Created successfully " + tour);
        }).catch((err) => {
            if(err){
                res.status(400);
                res.json({msg: 'ERROR could not update.'})
            }
        })
    });
    //DELETE
    app.delete('/tours/:id', (req, res) => {
        const vendorId = req.body.params;
        models.Tour.destroy(tourId).then((tour) => {
            res.status(200);
            res.json({msg: 'successfully deleted'});
        })
    });

}
