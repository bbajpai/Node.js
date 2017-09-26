/*** npm install --save expess ***/
/*** npm install -g nodemon****/

var express = require('express');


var app= express();
var port = 3500;


app.get("/",function(req,res){
	res.send("thi is home page")
})

app.get("/books",function(req,res){
	res.send("thi is book pag")
})

app.listen(port, function(err){
	console.log("running on port"+port)
})

