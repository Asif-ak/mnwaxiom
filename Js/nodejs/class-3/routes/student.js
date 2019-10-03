const express = require('express');
// const app = express();

const router = express.Router();

router.get("/", (req, res)=> {
    
    res.json({
        message: true,
        studentName:"SomeOne"
    });

});

module.exports =router;
