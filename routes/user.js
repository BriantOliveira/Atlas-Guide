module.exports = function(app) {
    app.get("/trips", (req, res)=>{
        if(req.user){
            console.log(req.user)
            res.send("user id " + req.user)
        }else{
            res.send("No dice")
        }

    })
};