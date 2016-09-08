var express = require('express')
var exphbs = require('express-handlebars')
var path = require('path')
var bodyParser = require('body-parser')
var db = require('./db/db')

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
  db.getAllSongs('songs', function (err, songs) {
    if (err) { res.send('Songs not available')
  } else {
  res.render('songsIndex', songs)
}
})
})


module.exports = app
