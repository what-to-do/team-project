function ajax () {

// Dictionary --------------------------------------------------------------------------------

	var baton = "Danc";



	var user = baton;

	var related_url = "https://wordsapiv1.p.mashape.com/words/" + user;

	$.ajax({
		    url: related_url, // The URL to the API. You can get this in the API page of the API you intend to consume
		    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		   	success: function(data) { success_dictionary = true; check(success_dictionary); },
	    	error: function(err) { success_dictionary = false; check(success_dictionary);},
		    beforeSend: function(xhr) {
		    xhr.setRequestHeader("X-Mashape-Authorization", "JVsFpSsea5mshtsH7N5dZQOYQd0yp1dqScujsnjdKNIoipqLfS"); // Enter here your Mashape key
		    }

		}); 

// Dictionary ----------------------------------------------------------------------------------

// Wikia ---------------------------------------------------------------------------------------

		var query = baton;
		var url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&indexpageids=1&iwurl=1&redirects=1&converttitles=1&exlimit=max&utf8=1&titles=';
		var queryString = query;
		url += queryString;
		
		$.ajax({
			url: url,
			method: 'GET',
			dataType: 'jsonp',
			contentType: "application/json; charset-utf-8",
			async: false,
			success: function(data) { success_wikipedia = true; },
	    	error: function(err) { success_wikipedia = false; }
		});

	

// Wikia ---------------------------------------------------------------------------------------

// YouTube ---------------------------------------------------------------------------------------

	var youtube_user = baton;

	var key = "AIzaSyBrQuQ65KpeO3KvEZ6zdmU7psymimrU6Is";
	var query_url = "https://www.googleapis.com/youtube/v3/search?part=snippet%2Cid&q=" + youtube_user +"&key=" + key ;
	//empty main display 
	$("#main-display").empty();

	$.ajax({

	    url: query_url,
	    method: "GET",
		success: function(data) { success_youtube = true; },
		error: function(err) { success_youtube = false; }
	});

// YouTube ---------------------------------------------------------------------------------------

// Giphy ---------------------------------------------------------------------------------------

	var giphy_user = baton;

	//variables for giphy api key and url to be used in AJAX
	var apiKey = "dc6zaTOxFJmzC";
	var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy_user + "&limit=12&rating=pg&api_key=" + apiKey;

	$.ajax({
		url: giphyURL, 
		method: 'GET',
		success: function(data) { success_giphy = true; },
		error: function(err) { success_giphy = false; }
	});


// Giphy ---------------------------------------------------------------------------------------


// Flickr ---------------------------------------------------------------------------------------

	var flickr_user = baton;

  	var flickr_url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&text=" + flickr_user + "&content_type=1&safe_search=1&sort=relevance&&extras=url_o&format=json&nojsoncallback=?&api_key=";
  	var api_key = "5fe01295efad5e61547cd49f8d37f223"; 

    //ajax call for flickr
    $.ajax({url:   
    	flickr_url + api_key,
    	method: 'GET',
    	success: function(data) { success_flickr = true; },
		error: function(err) { success_flickr = false; }
    });

// Flickr ---------------------------------------------------------------------------------------


// Movies ---------------------------------------------------------------------------------------

	var title = baton;
	var queryURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=full&tomatoes=true&r=json";

	$.ajax({
		url: queryURL,
		method: 'GET',
    	success: function(data) { success_omba = true; },
		error: function(err) { success_omba = false; }
	});


// Movies ---------------------------------------------------------------------------------------

check();

} // End of Ajax function


function check(dictionary){

	if (dictionary) {
		console.log("damn scope");
	} else {
		console.log("Fine by that way");
	}


// 	console.log(success_dictionary);

// var possible_category = [success_dictionary , success_wikipedia , success_youtube , success_giphy , success_flickr , success_omba];

// var category = ["Dictionary" , "Wikipedia" , "YouTube" , "Giphy" , "Flickr" , "Movies"];

// var success_category = [];

// var fail_category = [];

// for (var i = 0; i < possible_category.length; i++) {

// 	if (possible_category[i]) {
// 		success_category.push(category[i]);
// 	} else {
// 		fail_category.push(category[i]);
// 	}

// } // End of For Loop I

// console.log("success_category " + success_category);
// console.log("fail_category " + fail_category);

}