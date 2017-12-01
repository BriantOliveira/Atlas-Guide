/*******************************************
 *  Atlas Guide
 *      Your Source for travel itineraries
 *      Router File
 ******************************************/
module.exports = function (app) {
    //INDEX
    app.get('/', function (req, res) {
        res.render('index');
    });

    //Routes
    require('./signup')(app);
    require('./login')(app);

};
