const jwt = require('jsonwebtoken');
const User = require('../models/user');
// const config = require('config');

module.exports = async function(req, res, next) {
    //get token from header
    const token = req.params.authToken;

    //check if not token
    if(!token) {
        return res.status(401).json({ msg: 'No token, authorization denied',status:"Failure"});    
}
try {
    const decoded = jwt.verify(token,"mcqPlatform",async function(err,decoded){
        if(err)
        {
            res.json({status:"Error",msg:"Token is not valid"})
        }
        else
        {
            // console.log("decoded is..",decoded)
            console.log("authenticated")
            req.user=await User.findOne({_id:decoded._id})
            next();
        }
        });
   
} catch (err) {
    res.status(401).json({ msg: 'Token is not valid',status:"Error"});
}
}