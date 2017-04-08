var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

var keys = require('./keys.js');

var liri = {


	"my-tweets" : function() {
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	if (!error) {
	console.log(tweets);
	  }
	});
		}


	"spotify-this-song" : function() {

	spotify.search({ type: 'track', query: 'the sign' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

	}


	"movie-this": function() {
	request('http://www.omdbapi.com/?t=' + (query || 'Mr.Nobody') +'&tomatoes=true', function (error, response, info) {
      if (!error && response.statusCode == 200) {


    "do-what-it-says": function() {
    





	}




