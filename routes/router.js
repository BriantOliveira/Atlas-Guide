/*******************************************
 *  Atlas Guide
 *      Your Source for excellence
 *      Router File
 *  v. 1.0.0 Beta
 ******************************************/
module.exports = (app)=>{
    app.get('/', function (req, res) {
        res.render('index');
    })
}
