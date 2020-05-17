var express = require('express');
var router = express.Router();


router.route('/:userid')
.get((req,res,next)=>{
// Verified: Works
    var sql="CALL Users_getDetails("+req.params.userid+");";
    console.log("QUERY",sql)
    db.query(sql,function(err,ans){
        if(err)
        {
            console.error("ERROR",err);
            res.statusCode = 500
        }
        else{
            console.log("RESULT",JSON.stringify(ans[0]))
            res.end(JSON.stringify(ans[0]));
        }
    });
})
.put((req,res,next)=>{
    var sql="CALL Users_updateDetails("+req.params.user_name+",SHA2("+req.params.password+"),"+req.params.full_name+","+req.params.user_email+","+req.params.user_address+");";
    console.log("QUERY",sql);
    db.query(sql,(err,ans)=>{
        if(err){
            console.error("ERROR",err);
            res.statusCode=404;
        }
        else{
            console.log("RESULT",JSON.stringify(ans[0]));
            res.end(JSON.stringify(ans[0]));
        }
    })
})
.delete((req,res,next)=>{
    var sql="CALL Users_deleteUsers("+req.params.user_name+");";
    console.log("QUERY",sql);
    db.query(sql,(err,ans)=>{
        if(err){
            console.error("ERROR",err);
            res.statusCode=500;
        }
        else{
            console.log("RESULT",JSON.stringify(ans[0]));
            res.end(JSON.stringify(ans[0]));
        }
    })
});

module.exports = router;