const jwt = require('jsonwebtoken')

exports.createJWT = function(dbObject){
    return jwt.sign({ id: dbObject.dataValues.id }, process.env.SECRETKEY);
}

exports.cookieOptions = function(){
    let jsonObject = {
        maxAge: 1000000, 
        httpOnly: true
    }
    return jsonObject
}

exports.setUserIDCookie = function(dbObject, resObject){
    token = jwt.sign({ id: dbObject.dataValues.id }, process.env.SECRETKEY);
    cookieOptions = {
        maxAge: 1000000, 
        httpOnly: true
    };
    resObject.cookie('jwtToken', token, cookieOptions);
}