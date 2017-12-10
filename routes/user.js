module.exports = function(app) {
    app.get("/trips", (req, res)=>{
        if(!req.user){
            res.redirect("/")
        }
        console.log(req.user)
        res.send("user id " + req.user)
    })
};