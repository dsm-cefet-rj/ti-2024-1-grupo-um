import jsonwebtoken  from "jsonwebtoken";
import { blackListModel } from "../models/BlackListModel.js";

async function verifyJWT(req, res, next){
    try{
        const token = req.headers['authorization'];

        if(token){
            const isTokenBlackListed = await checkBlackList(token);
            console.log(isTokenBlackListed);
            if(isTokenBlackListed){
                throw new Error("Token blacklisted");
            }
        }else{
            return res.json({ "message" : "Não há token inserido"});
        }
        jsonwebtoken.verify(token, process.env.SECRET_JWT, (err, user) => {
            if (err) return res.sendStatus(403);
            console.log("verificacao bem sucedida");
            req.user = user;
            next();
        });
    }catch(error){
        return res.json({message: error.message});
    }
}

function authorizeTypes(allowedTypes) {
    return (req, res, next) => {
        if (!allowedTypes.includes(req.user.type)) {
            return res.sendStatus(403);
        }
        next();
    };
}

const checkBlackList = async (token) => {
    return await blackListModel.findOne({ token }) !== null;
};

export { authorizeTypes, verifyJWT }