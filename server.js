// Server Dependences
// ==========================
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Create instance of Express
// ==========================
var app = express();
var PORT = process.env.PORT || 3000;

// Use Morgan for logging
// ==========================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// Serve static content for the app from the "public" directory
// ==========================
app.use(express.static(process.cwd() + '/public'));

// Mongoose DB Connection
// ==========================
mongoose.connect('mongodb://localhost/progressCoffee');
var db = mongoose.connection;

db.on('error', function(err){
	console.log('Mongoose Error: ', err);
});

db.once('open', function(){
	console.log('Mongoose connection successful.');
});

// Require DB Model
var Coffee = require('./models/coffeeModel.js');

// Routes
// ==========================
app.get('/', function(req, res){
	res.sendFile('./public/index.html');
});

// Route to get all coffee saved in db
// ==========================
app.get('/coffee/', function(req, res){
    // using the id passed in the id parameter, 
    // prepare a query that finds the matching one in our db...
    Coffee.find({}, function(err, doc){
        if(err){
            res.send(err);
        } else {
            res.json(doc);
        }
    });
});

// Server listener
// ==========================
app.listen(process.env.PORT || 3000);