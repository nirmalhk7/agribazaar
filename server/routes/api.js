var express = require('express');
var router  = express.Router();
router.get("/",function(req,res,next){
    res.send("this msg is injected by server");
});

module.exports = router;