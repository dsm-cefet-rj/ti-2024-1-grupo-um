const multer = require('multer')

var storage = multer.diskStorage({
    filename: function(req,file,cb){
        let nome = Date.now()+ "-"+file.originalname
        cb(null,nome)
    },
    destination: function(req,file,cb){
        let path = "./public/fotos"
        cb(null, path)
    }
})
var upload = multer({storage})

module.exports = upload