var express = require('express');
var router = express.Router();

router.route('/:userid')
.get((req,res,next)=>{
    console.log('Display User Details')
    var sql="CALL Users_getDetails("+req.params.userId+");"
    db.query(sql,function(err,rep){
        if(err)
        {
            throw console.error("SQL Error",err);
        }
        res.end(JSON.stringify(rep[0]));
    });
})
.put((req,res,next)=>{
    console.log('Update user profile');
})
.delete((req,res,next)=>{
    console.log('Delete User. Redirect to Root');
});

module.exports = router;