const db = require('../database/models');

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;

    let cookieEmail = req.cookies.userEmail;
    if(cookieEmail){
        db.User.findOne({
            where: {email: cookieEmail}
        }).then(userFound => {
            if(userFound){
                res.locals.userLogged = userFound;
                res.locals.isLogged = true;
            }
     
            return next();
            })
    }else{
        
        if(req.session && req.session.userLogged){
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }  

        next();
    }
}

module.exports = userLoggedMiddleware;
