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

function authorizeTypes(allowedTypes) {
    return (req, res, next) => {
        if (!allowedTypes.includes(req.user.type)) {
            return res.sendStatus(403);
        }
        next();
    };
}

export { authorizeTypes, verifyJWT }