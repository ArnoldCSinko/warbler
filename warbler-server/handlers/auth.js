const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = async function (req, res, next) {
    
    try {
        // Find User
        let user = await db.User.findOne({
            email: req.body.email
        });
        
        // Destructure user object
        let { id, username, profileImageURL } = user;
        // Compare password
       
        let isMatch = await user.comparePassword(req.body.password);
        if (isMatch) {
            
            let token = jwt.sign({
                id,
                username,
                profileImageURL
            }, process.env.SECRET_KEY);
            return res.status(200).json({
                id,
                username,
                profileImageURL,
                token
            });
        } else {
            return next({
                status: 400,
                message: "Invalid Username/Password!"
            });
        }
    } catch (err) {
        return next({
            status: 400,
            message: "Invalid Username/Password!"
        });
    }

};

exports.signup = async function (req, res, next) {
    
    try {
        // Create a user object from request body
        let user = await db.User.create(req.body);
        // Destructure user object
        let { id, username, profileImageURL } = user;
        // Create a token(Signing a token)
        // use process.env.SECRET_KEY
        let token = jwt.sign({
            id,
            username,
            profileImageURL
        }, process.env.SECRET_KEY);
        return res.status(200).json({
            id,
            username,
            profileImageURL,
            token
        });

    } catch (err) {
        /* Check type of error
           if certain type of error
           Respond with Username or email already taken
           otherwise return 400 status code
        */
        // Validation failed?
        if (err.code === 11000) {
            err.message = "Sorry, Email and/or Username already taken";
        }
        return next({
            status: 400,
            message: err.message
        });
    }
};  