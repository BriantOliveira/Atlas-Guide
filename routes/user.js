/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Router File
 ******************************************/

 const models = ('../models');
 const jwt = require('jsonwebtoken');
 const bcrypt = require('bcrypt');
 const auth = require('../auth.js');

module.exports = function(app) {

    app.get("/feed", (req, res)=>{
        if(!req.user){
            return res.redirect("/login")
        }
        console.log(req.user)
        res.render("feed")
    })

    app.get('/profile/update', (req, res)=>{
        res.render('profile');
    });

    app.post('/profile/update', (req, res)=>{
        res.send("post")
    })
};
