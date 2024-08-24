import jsonwebtoken  from "jsonwebtoken";

function verifyJWT(req, res, next){
    const token = req.headers['authorization'];

    if(!token){
        return res.json({ "message" : "Não há token inserido"});
    }
    try{
        jsonwebtoken.verify(token, process.env.SECRET_JWT, (err, user) => {
            if (err) return res.sendStatus(403);
            console.log("verificacao bem sucedida");
            req.user = user;
            next();
        });
    }catch(error){
        console.log(error);
        return res.json({message: error.message});
    }
}

function authorizeType(type) {
    return (req, res, next) => {
        if (req.user.type !== type) {
            return res.sendStatus(403); // Forbidden
        }
        console.log(`${req.user.type} autorizado`)
        next();
    };
}

export { authorizeType, verifyJWT }