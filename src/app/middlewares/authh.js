
import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

export default (request,response,next) => {

const authToken = request.headers.authorization
if(!authToken) {
return response.status(401).json({ERROR: "Cade seu token"})
}
const token = authToken.split('')[1]

try{
jwt.verify(token, authConfig.secret, function(erro, decoded){

    if(erro) {
       throw new Error()
    }
console.log(decoded)
return next()

})

}catch(error){
return response.status(401).json({ERROR: "Token is Invalid"})

}

}                                                                                                                                   1                                                                                                           