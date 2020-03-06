

var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'mks',
	password : 'Mukesh@123',
	database : 'agribazaar'
});
connection.connect(function (err){
	if(!err){
		console.log("MySQL: Database is CONNECTED :) ")
	}else {
		throw new Error("MySQL: Database is DISCONNECTED :( ");
	}
});
module.exports=connection;
