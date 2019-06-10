// Required Dependencies
var express = require('express')
var bodyParser = require('body-parser')
var path = require ('path')
// Configure express
var app = express()
var PORT = process.env.PORT || 8080

// Add the middleware for parsing incoming requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())

// Make sure express has access to the css files
// app.use(express.static(__dirname + '/app/css'));

// Add the routes using the path package
require(path.join(__dirname, './app/routing/apiRoutes'))(app)
require(path.join(__dirname, './app/routing/htmlRoutes'))(app)

// Activate the PORT to begin
app.listen(PORT, function () {
console.log(`Hello? You are connected on PORT ${PORT}`)
})
