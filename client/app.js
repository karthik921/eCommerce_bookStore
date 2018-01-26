var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		controller:"BooksController",
		templateUrl: "views/books.html"
	})
	.when("/books",{
		controller:"BooksController",
		templateUrl: "views/books.html"
	})
	.when("/books/details/:id",{
		controller:"BooksController",
		templateUrl:"views/bookDetails.html"
	})
	.when("/books/add",{
		controller:"BooksController",
		templateUrl:"views/addBook.html"
	})
	.when("/books/remove/:id",{
		controller:"BooksController",
		templateUrl:"views/books.html"
	})
	.when("/books/edit/:id",{
		controller:"BooksController",
		templateUrl:"views/editBook.html"
	})
	.otherwise({
		redirectTo:"/"
	});
});