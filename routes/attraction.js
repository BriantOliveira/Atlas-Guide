
/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Router File
 ******************************************/
const models = require('../models');

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
         const vendorId = req.params.id;
         models.Tour.findById(tourId).then((tour) => {
             res.send("attraction")
         })
     })

     //CREATE
     app.post('/tourism/create', (req, res) => {
         models.Tour.create(req.body).then((tour) => {
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
         const vendorId = req.body.params;
         models.Tour.update(tourId).then((tour) => {
             res.status(200).json({msg: 'successfully updated', tour});
         }).catch((err) =>{
             if(err)
             res.status(400)
             console.log(err);
         })
     });
     //DELETE
     app.delete('/tourism/:id', (req, res) => {
         const vendorId = re.body.params;
         models.Tour.destroy(tourId).then((tour) => {
             res.status(200).json({msg: 'successfully deleted', tour});
            }).catch((err) => {
                if(err) {
               res.status(400).json({msg: 'ERRO: tour was not deleted'})
                }
        })
    });
};
