var express = require('express')
var exphbs = require('express-handlebars')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()

// setup BODY PARSER
app.use(bodyParser.urlencoded({extended: false}))

// view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// serve the files in /public
app.use(express.static(path.join(__dirname, 'public')))



//---------------------ROUTES---------------------------

app.get('/', function(req, res) {
  res.send('deployed to Heroku')
})


module.exports = app
