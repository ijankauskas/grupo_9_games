const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/imagenes'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + file.fieldname + path.extname(file.originalname)
        cb(null, uniqueSuffix)
    }
});

const upload = multer({ storage });

module.exports= upload;