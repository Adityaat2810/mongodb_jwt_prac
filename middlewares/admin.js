const jwt =require('jsonwebtoken');
const {JWT_SECRET} =require('../config');

//Middleware for handling auth 
function adminMiddleware(req,res,next){
    //Implement admin auth check 
    //You need to check the headers and validate the
    //admin DB
    const token = req.headers.authorization;
    //Bearer jwt
    const words =token.split(" ");
    const jwtToken =words[1];

    const decodedValue=jwt.verify(jwtToken,JWT_SECRET);
    if(decodedValue.username){
        next();
    }else{
        res.status(403).json({
            message:"you are not authenticated"
        })
    }


}

module.exports=adminMiddleware