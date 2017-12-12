module.exports = function(app) {

    app.get("/feed", (req, res)=>{
        if(!req.user){
            return res.redirect("/login")
        }
        console.log(req.user)
        res.render('feed');
    });
};
