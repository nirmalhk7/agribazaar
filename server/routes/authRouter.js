var express = require('express')
var router = express.Router();

router.route('/login')
.post((req,res,next)=>{
    var post  = req.body;
    console.log("Cache Values",post.remember)
    var email_username= post.user_email;
    var pass= post.user_password;
    var sql="CALL Users_verify('"+email_username+"',SHA2('"+pass+"',256));";
//var sql="select id,email,fullname,username,role from `Users` where (`email`='"+email_username+"' OR `username`='"+email_username+"') AND password='"+pass+"'";
    console.log("QUERY",sql);
    db.query(sql, function(err, results){ 
        if (err) {
            return console.error("SQL Error",err);
        }
        var json=JSON.stringify(results[0]);
        console.log("JSON Response Value",json[0]!=null,json.length,results[0]!=null,results.length)
        if(json.length>2){
            console.log("RESULT",json);
            console.log("Login Accepted!",req.body.user_email)
            res.end(json);
        }
        else
        {
            var sess = req.session; 
            res.statusCode=401
            console.warn("auth","Incorrect Username "+email_username+" /Password "+pass);
            res.end("Unauthorized- Incorrect")
        }
    })
})

router.route('/signup')
.post((req,res,next)=>{
    var post  = req.body;
    var name= post.Rusername;
    var pass= post.Rpassword;
    var fname= post.Rfullname;
    var address= post.Raddress;
    var email=post.Remail;
    var role=post.Rrole;
    console.log("Role "+role);
    var sql = "call Users_register('"+name+"',sha('"+pass+"'),'"+fname+"','"+email+"','"+role+"','"+address+"');call Users_getDetailsByUsername('"+name+"');";
    var query = db.query(sql, function(err, result) {
        if (err) {
            return console.error(err);
        }
        res.send(JSON.stringify(result[2]))
    });
})

module.exports = router;