exports.mycart = function(req, res, next){
    var userId =  req.params.userId;
    let sql="call Cart_getItems("+userId+")";
    db.query(sql,function(err,results){
        if(err)
        {
            throw console.error("SQL Error",err);
        }
        var cart= JSON.stringify(results[0]);
        console.log("Cart",cart);
        res.end(cart);
    });
}