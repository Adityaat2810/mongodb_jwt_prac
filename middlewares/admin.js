
//Middleware for handling auth 
function adminMiddleware(req,res,next){
    //Implement admin auth check 
    //You need to check the headers and validate the
    //admin DB
    const token = req.headers.authorization;
    //Bearer jwt
    const words =token.split(" ");
    const jwtToken =words[1];
    

}

module.exports=adminMiddleware