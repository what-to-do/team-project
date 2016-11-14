$(document).ready(function(){


//spotify API
var artistURL = "https://api.spotify.com/v1/search?q=ben+folds+five&limit=20&type=artist";
var apiKey = "d5ac5896ca8549c2bd1cc4a9226a4055";

$.ajax({url: artistURL, method: 'GET'}).done(function(response) {
 console.log(response);
 console.log(artistURL);
});

var songURL = "https://api.spotify.com/v1/search?q=brick&limit=20&type=track";

$.ajax({url: songURL, method: 'GET'}).done(function(response){
	console.log(response);
	console.log(songURL);
});


});