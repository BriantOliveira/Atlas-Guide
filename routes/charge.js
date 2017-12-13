/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Charge Router File
 ******************************************/

const models = ('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const auth = require('../auth.js');

module.exports = function(app) {


    // app.get('/buynow', (req, res) => {
    //     if(!req.user){
    //         return res.redirect("/login")
    //     }
    //     res.render('purchase');
    //     //console.log('Here it is the id: ', req.params.tourId)
    //     // app.get('/tours/:tourId/purchase' (req.res) => {
    //     //     console.log('Here it is the id: ', req.params.tourId)
    //     //     res.render('purchase', {tour: tours})
    // })
    app.get('/success', (req, res) => {
        if(!req.user){
            return res.redirect("/login")
        }
        res.render('success');
        //console.log('Here it is the id: ', req.params.tourId)
        // app.get('/tours/:tourId/purchase' (req.res) => {
        //     console.log('Here it is the id: ', req.params.tourId)
        //     res.render('purchase', {tour: tours})
    })

    //STRIPE PAYMENT
    app.post('/charge', (req, res) => {
        const amount = 10000;
        // console.log(req.body)
        // res.send('TEST')

        stripe.customers.create({
            email: req.body.stripeEmail,
            source: req.body.stripeToken
        })
        .then(customer => stripe.charges.create({
            amount,
            description: 'Tour sale made at Atlas Guide',
            currency:'usd',
            customer: customer.id
        }))
        .then((charge) => {
            if(!charge) {
                res.status(400)
                console.log(err)
            }else {
                console.log("payment done successfully");
                res.render('success');
            }
        });

    });



};
