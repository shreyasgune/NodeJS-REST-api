//Dependencies
var express = require('express');
//var bodyParser = require('body-parser');
//Express
var app = express();
//app.use(bodyParser.urlencoded({extended : true}));
//app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send('Rest API under construction');
});

//Start Server
app.listen(8900);
//console.log('API is running on 8900');
 
