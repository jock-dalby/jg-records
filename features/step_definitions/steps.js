var assert = require('cucumber-assert')
var Url = require('url')
var extend = require('xtend')

var config = require('../../config')

module.exports = function () {

  this.Given('I am on the page "$string"', function (pathname) {
    browser.url(`http://localhost:5050${pathname}`)
  })

  this.Then('I can see the song "$string"', function (song, callback) {
    var SongExists = browser.waitForExist(`td=${song}`)
    assert.equal(SongExists, true, callback)
  })

}
