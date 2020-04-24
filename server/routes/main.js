
exports.login_signup_render= function(req,res,next){
    console.log("Login ",req.session.username);
    if(req.session.username==null)
    {
        var sess = req.session; 
        var message=req.session.message;
        console.log("Message "+req.session.message);
        if(req.session.message!=null)
        {
            var level=req.session.level;
            console.log("Recieving "+message);
            res.render('main/auth', { title: 'AgriBazaar',message:message,level:level });
            delete res.session.message;
            delete res.session.level;
        }
        else
        {
            res.render('main/auth', { title: 'AgriBazaar' });
        }
    }
    else
    {
        res.redirect('/');
    }
}

exports.logout = function(req,res,next){
    console.log("Auth: Trying to logout.");
    var sess = req.session; 
    console.log("Auth: "+req.session.username+" is trying to logout.");
    req.session.destroy(function(err){
        if(err){
            console.log("Auth:"+err);
        }else{
            console.log("Auth: Logged Out!");
            res.clearCookie('userId');
            res.clearCookie('username');
            res.clearCookie('role');
            res.redirect('/');
        }
    });
}
exports.login = function(req, res){
    console.log("LOGIN ATTEMPT")
    if(req.method == "POST"){
        var post  = req.body;
        console.log("Cache Values",post.remember)
        var email_username= post.user_email;
        var pass= post.user_password;
        console.log("auth","Recieved "+email_username+" w/ Password: "+pass);
        var sql="CALL Users_verify('"+email_username+"',SHA2('"+pass+"',256));";
    //var sql="select id,email,fullname,username,role from `Users` where (`email`='"+email_username+"' OR `username`='"+email_username+"') AND password='"+pass+"'";
        db.query(sql, function(err, results){ 
            if (err) {
                return console.error("SQL Error",err);
            }
            var json=JSON.stringify(results[0]);
            console.log("JSON Response Value",json[0]!=null,json.length,results[0]!=null,results.length)
            if(json.length>2 && results.length>2){
                console.log("Accepted",json);
                res.end(json);
            }
            else
            {
                var sess = req.session; 
                console.warn("auth","Incorrect Username "+email_username+" /Password "+pass);
            }
    })}
};
exports.signup = function(req, res){
    message = '';
    if(req.method == "POST"){
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
        

    } 
};
exports.getItemSeller = function(req,res,next){
    //FIXME This API doesnt work
    console.log("HI");
    var sql="call search_getSellers("+req.params.item+");";
    console.log(db.query(sql));
};
exports.search = function(req,res,next){
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
};