const express = require('express');
const multer = require('multer');
const router = express.Router();
const User = require('./models/user');




const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'backend/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage: storage
});


router.post('/save-image', upload.array('file'), (req,res) => {
    res.status(201).json({message: 'Image uploaded'});
});


module.exports = router;



