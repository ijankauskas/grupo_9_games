const db = require('../database/models');

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;

    let cookieEmail = req.cookies.userEmail;
    if(cookieEmail){
    db.User.findOne({
        where: {email: cookieEmail}
    }).then(userFound => {
        if(userFound){
            req.session.userLogged = userFound
        }
        
        if(req.session && req.session.userLogged){
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }
    
         return next();
        })   
    }else{
        next();
    }
}

module.exports = userLoggedMiddleware;
