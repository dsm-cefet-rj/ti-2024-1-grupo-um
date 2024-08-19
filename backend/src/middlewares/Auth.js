import jsonwebtoken  from "jsonwebtoken";

export default function verifyJWT(req, res, next){
    const token = req.headers['authorization'];

    if(!token){
        return res.json({ "message" : "Não há token inserido"});
    }
    try{
        jsonwebtoken.verify(token, process.env.SECRET_JWT);
        console.log("verificacao bem sucedida")
        next();
    }catch(error){
        console.log(error);
        return res.json({message: error.message});
    }
}