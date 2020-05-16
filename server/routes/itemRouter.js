var express = require('express')
var router = express.Router();

router.route('/:itemid')
.get((req,res,next)=>{
    var sql = "call search_getSellers("+req.params.itemid+");";
    console.log("QUERY",sql);
    db.query(sql,(err,ans)=>{
        if(err){
            res.statusCode=500
            res.end("Invalid Query");
        }
        else{
            console.log("RESULT",JSON.stringify(ans[0]));
            res.end(JSON.stringify(ans[0]))
        }
    });
    // Visible to Seller Only

})
.put((req,res,next)=>{
    console.log("Update Item Details by Farmer");
    
})
.delete((req,res,next)=>{
    console.log("Delete Item!");
})
module.exports = router