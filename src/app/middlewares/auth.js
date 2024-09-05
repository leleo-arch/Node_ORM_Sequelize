import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

export default (request,response,next) => {

const authToken = request.headers.authorization
if(!authToken) {
return response.status(401).json({ERROR: "Cade seu token"})
}
const token = authToken.split(' ')[1];

try{
jwt.verify(token, authConfig.secret, function(erro, decoded){

    if(erro) {
       throw new Error()
    }
    request.userid = decoded.id;
    request.userName = decoded.name;


console.log(decoded);
console.log(request.headers.authorization);
return next();

})

}catch(error){
return response.status(401).json({ERROR: "Token is Invalid"})

}



}                                                                                                                                                                                                                                            