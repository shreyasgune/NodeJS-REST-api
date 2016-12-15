//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//MongoDB
//mongoose.connect('mongodb://localhost/rest_test');

//Express
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send('Rest API under construction');
});


//Routes
//app.use('/api', require('./routes/api'));



//Start Server
app.listen(3100);
console.log('API is running on 3100');

