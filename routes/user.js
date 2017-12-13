module.exports = function(app) {
    app.get("/trips", (req, res)=>{
        if(!req.user){
            return res.redirect("/login")
        }
        console.log(req.user)
        res.render("trips")
    })

    app.get('/profile/update', (req, res)=>{
        res.render('profile');
    });

    app.post('/profile/update', (req, res)=>{
        res.send("post")
    })
};
    
