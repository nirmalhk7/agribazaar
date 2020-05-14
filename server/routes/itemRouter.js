var express = require('express')
var router = express.Router();

router.route('/:itemid')
.get((req,res,next)=>{
    console.log("Send Item Details");
})
.put((req,res,next)=>{
    console.log("Update Item Details by Farmer");
})
.delete((req,res,next)=>{
    console.log("Delete Item!");
})
module.exports = router