import jsonwebtoken  from "jsonwebtoken";

export default function verifyJWT(req, res, next){
    const token = req.headers['Authorization'];

    if(!token){
        return res.json({ "message" : "Não há token inserido"});
    }
    try{
        jsonwebtoken.verify(token, process.env.SECRET_JWT);
        
        next();
    }catch(error){
        return res.json({message: error.message});
    }
}