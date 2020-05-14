var express = require('express');
var router = express.Router();

// Verified: works.
router.route('/')
.get((req,res,next)=>{
    console.log('Search Items')
        //FIXME Bugged
    let sql="call search_All('"+req.query.squery+"');"
    console.log("QUERY",sql);
    db.query(sql,function(err,answ){
        if(err)
        {
            res.statusCode=500
            throw Errror("SQL Error",err);
        }
        let ans=JSON.stringify(answ[0]);
        console.log("RESULT",ans);
        return res.end(ans);
    });
});

module.exports = router;