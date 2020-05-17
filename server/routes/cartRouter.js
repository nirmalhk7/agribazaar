var express = require('express');
var router = express.Router();

router.route('/')
.get((req,res,next)=>{
    console.log('Get Cart');
    var userId =  req.params.userId;
    let sql="call Cart_getItems("+userId+")";
    db.query(sql,function(err,ans){
        if(err)
        {
            throw console.error("ERROR",err);
        }
        console.log("RESULT",JSON.stringify(ans[0]));
        res.end(JSON.stringify(ans[0]));
    });
})
.put((req,res,next)=>{
    var sql = "CALL Cart_addToCart("+req.params.userId+")";
    console.log("QUERY",sql);
    db.query(sql,(err,ans)=>{
        if(err){
            throw console.error("ERROR",err);
        }
        console.log("RESULT",JSON.stringify(ans[0]));
        res.end(JSON.stringify(ans[0]));
    })
})
.delete((req,res,next)=>{
    var sql = "CALL Cart_clearAll("+req.params.userId+")";
    console.log("QUERY",sql);
    db.query(sql,(err,ans)=>{
        if(err){
            throw console.error("ERROR",err);
        }
        console.log("RESULT",JSON.stringify(ans[0]));
        res.end(JSON.stringify(ans[0]));
    })
});

router.route('/:itemid')
.post((req,res,next)=>{
    console.log('Add item to Cart');
})
.delete((req,res,next)=>{
    console.log('Delete item from cart')
})
.put((req,res,next)=>{
    console.log('Change Item properties in cart');
})

module.exports = router;