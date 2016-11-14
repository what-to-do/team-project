  var api = "&api_key=dc6zaTOxFJmzC";
	var queryURL =  "https://api.giphy.com/v1/gifs/random?tag=" + userInput + api;
	
    $.ajax({
    	url: queryURL,
    	method: 'GET'}) 
    	.done(function(response) {
    	});
