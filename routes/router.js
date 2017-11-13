/*******************************************
 *  Atlas Guide
 *      Your Source for excellence
 *      Router File
 ******************************************/
module.exports = (app)=>{
    app.get('/', (req, res)=>{
        res.render('index')
    })

    app.get('/signup', (req, res)=>{
        res.render('signup')
    })
}
