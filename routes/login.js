/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Login Router File
 ******************************************/
 module.exports = function(app) {
    app.get('/login', function(req,res) {
        res.send('Its working');
    });
 };
