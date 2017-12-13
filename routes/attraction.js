
/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Router File
 ******************************************/
const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const auth = require('../auth.js');

 module.exports = function (app) {

     //INDEX
     app.get('/tourism',(req, res) =>{
         if(!req.user) {
             return res.redirect("/login")
         }
         console.log(req.user);
         res.render('attraction');
     });
     //SHOW
     app.get('/tourism/:id', (req, res) => {
         const userId = req.params.id;
         models.Event.findById(eventId).then((event) => {
             res.send("attraction")
         })
     })

     //CREATE
     app.post('/tourism/create', (req, res) => {
         models.Event.create(req.body).then((event) => {
             res.status(200);
             res.send("created successfully");
         }).catch((err) => {
             if(err) {
                 console.log(err);
                 res.status(400);
             }
         })
     })
     //UPDATE
     app.put('tourism/:id/edit', (req, res) => {
         const userId = req.body.params;
         models.Event.update(eventId).then((event) => {
             res.status(200).json({msg: 'successfully updated', event});
         }).catch((err) =>{
             if(err){
             res.status(400)
             console.log(err);
            }
         })
     });
     //DELETE
     app.delete('/tourism/:id', (req, res) => {
         const userId = req.body.params;
         models.Event.destroy(eventId).then((event) => {
             res.status(200).json({msg: 'successfully deleted', event});
            }).catch((err) => {
                if(err) {
               res.status(400).json({msg: 'ERROR: tour was not deleted'})
                }
        })
    });
};
