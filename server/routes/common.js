exports.getprofile= function(req,res,next){
    var sql="CALL Users_getDetails("+req.params.userId+");"
    db.query(sql,function(err,rep){
        if(err)
        {
            throw console.error("SQL Error",err);
        }
        res.end(JSON.stringify(rep[0]));
    });
}
// exports.getprofile= function(req,res,next){
//     var sess = req.session;    
//     var username=req.session.username;
//     var userId=req.session.userId;
//     console.log(username," on Get Profile")
//     var role=req.session.role;
//     if(role=="farmer" && req.params.username==req.session.username)
//     {
//         farmer(res,req,role);
//     }
//     else if(role=="shopper" && req.params.username==req.session.username)
//     {
//         customer(res,req,role);
//     }
//     else
//     {
//         req.session.message="Please login to view your profile"
//         req.session.level="danger"
//         res.redirect('/auth')
//     }
// }
// function farmer(res,req,Role)
// {   
//     var sess = req.session;    
//     var username=req.session.username;
//     var userId=req.session.userId;
//     if(req.session.userId!=null)
//     {
//         var sql="CALL Seller_getLastSales("+req.session.userId+");"
//         db.query(sql,function(err,results){
//             if(err)
//             {
//                 throw console.error("SQL Error",err);
//             }
//             var sales=JSON.parse(JSON.stringify(results[0]))
//             res.end(sales);
//         });
//     }
// }
// function customer(res,req,Role)
// {
//     var sess = req.session;    
//     var username=req.session.username;
//     var userId=req.session.userId;
//     if(userId!=null)
//     {
//         var sql="call Users_getDetails("+userId+");";
//         db.query(sql,function(error,results)
//         {
//             if(error)
//             {
//                 throw console.error("SQL Error",error);
//             }
//             var details=JSON.parse(JSON.stringify(results[0]))
//             console.log(details);
//             res.end(details);
//         })
//     }
// }