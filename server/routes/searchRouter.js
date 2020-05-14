var express = require('express');
var router = express.Router();

router.route('/')
.get((req,res,next)=>{
    console.log('Search Items')
        //FIXME Bugged
    let sql="call search_All('"+req.params.squery+"');"
    console.log("SQL",sql);
    db.query(sql,function(err,answ){
        if(err)
        {
            throw console.error("SQL Error",err);
        }
        let ans=JSON.stringify(answ[0]);
        return res.end(ans);
    });
});

module.exports = router;