var express=require('express');
var bodyparser=require('body-parser');
var mongoose=require('mongoose');

var app=express();

//app.use(express.static(__dirname+'/client'));
app.use(express.static('client'));﻿
app.use(bodyparser.json());

Genre=require('./models/genre.js');
Book=require('./models/books.js');

//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db= mongoose.connection;

app.get('/',function(req,res){
	res.send('please use /api/books');
});

app.get('/api/genre', function(req,res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

app.get('/api/books', function(req,res){
	Book.getBooks(function(err, books){
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/books/:_id', function(req,res){
	Book.getBookById(req.params._id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/books', function(req,res){
	var book= req.body;
	Book.addBook(book, function(err,book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/books/:_id', function(req,res){
	var id=req.params._id;
	Book.removeBook(id, function(err,book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.listen(3000);
console.log("server started on port 3000");