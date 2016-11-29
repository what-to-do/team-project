function ajax () {

// Dictionary --------------------------------------------------------------------------------

	possible_categories = [];


	var user = baton;

	var related_url = "https://wordsapiv1.p.mashape.com/words/" + user;

	$.ajax({
		    url: related_url, // The URL to the API. You can get this in the API page of the API you intend to consume
		    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		   	success: function(data) { 
		   		var name = "Dictionary";
		   		check(data,name);
		   	 },
	    	error: function(err) { success_dictionary = false; },
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
		success: function(data) { 
			var name = "Wikipedia";
			check(data, name); 
		},
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
		success: function(data) { 
			var name = "YouTube";
			check(data, name)
		},
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
		success: function(data) { 
			var name = "Giphy";
			check(data,name);
		},
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
    	success: function(data) {
    		var name = "Flickr";
    		check(data,name);
    	},
		error: function(err) { success_flickr = false; }
    });

// Flickr ---------------------------------------------------------------------------------------


// Movies ---------------------------------------------------------------------------------------

	var title = baton;
	var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=full&tomatoes=true&r=json";

	$.ajax({
		url: queryURL,
		method: 'GET',
    	success: function(data) { 
    		var name = "Movies";
    		check(data,name);
    	},
		error: function(err) { success_omba = false; }
	});


// Movies ---------------------------------------------------------------------------------------

} // End of Ajax function


function check(data,name){

	var category = ["Dictionary" , "Wikipedia" , "YouTube" , "Giphy" , "Flickr" , "Movies"];

	var test = category.indexOf(name);

	switch(test){
		case(0):
			possible_categories.push(category[0]);
			break;
		case(1):
			if (data.query.pageids[0] > -1) {
				possible_categories.push(category[1]);
			} else {
				
			} // End of If Else
			break;
		case(2):
			if (data.pageInfo.totalResults > 0){
				possible_categories.push(category[2]);
			} else {
				
			}
			break;
		case(3):
			
			if (data.pagination.total_count > 0){
				possible_categories.push(category[3]);
			} else {
			
			}
			break;
		case(4):
			if (data.photos.pages > 0){
				possible_categories.push(category[4]);
			} else {
		
			}
			break;
		case(5):
			if (data.Response === "True"){
				possible_categories.push(category[5])
			} else {
			
			}

	} // End of Switch


possible_categories.sort();

category_bar();

expand_category_box();

} // End of Check function