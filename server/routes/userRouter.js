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
    console.log('Update user profile');
})
.delete((req,res,next)=>{
    console.log('Delete User. Redirect to Root');
});

module.exports = router;