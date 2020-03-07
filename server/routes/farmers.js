exports.lastSales= function(req,res,next){
    console.log(sql);
    var sql="CALL Seller_getLastSales("+req.session.userId+");"
    db.query(sql,function(err,results){
        if(err)
        {
            throw console.error("SQL Error",err);
        }
        var sales=JSON.parse(JSON.stringify(results[0]))
        console.log(sales);
        res.end(sales);
    });
}
exports.addItems= function(req,res,next){
    //TODO This is pending from DB side as well
    var sess=req.session;
    if(req.session.userId!=null && req.params.username==req.session.username)
    {
        res.render('farmers/addproducts',{title:"Add Products"})
    }
    else
    {
        req.session.message="Please login to view your sales"
        req.session.level="warning"
        res.redirect('/auth')
    }
}