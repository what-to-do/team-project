function related(){
	//console.log(baton);
	var word = baton;

	counter = 0;
	var names_options = ["antonyms" , "categories" , "holonyms" , "hyponyms" , "meronyms" , "similar"];

	var related_options = ["antonyms" , "hasCategories" , "partOf" , "hasTypes" , "hasParts" , "similarTo" ,"synonyms"];



	for (var i = 0; i < related_options.length; i++) {

		var related_url = "https://wordsapiv1.p.mashape.com/words/" + word +"/" + related_options[i]

		// Ajax request to wordsapi 
		// Will return the synonyms of the searched word
		$.ajax({
		    url: related_url, // The URL to the API. You can get this in the API page of the API you intend to consume
		    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		    data: {}, // Additional parameters here
		    dataType: 'json',
		    success: function(data) { },
		    error: function(err) { alert(err); },
		    beforeSend: function(xhr) {
		    xhr.setRequestHeader("X-Mashape-Authorization", "JVsFpSsea5mshtsH7N5dZQOYQd0yp1dqScujsnjdKNIoipqLfS"); // Enter here your Mashape key
		    }

		}).done(function(response){

			var related_options = ["antonyms" , "hasCategories" , "partOf" , "hasTypes" , "hasParts" , "similarTo" ,"synonyms"];

			for (var j = 0; j < related_options.length; j++) {
			
				if (response[key]) {

				var key = related_options[j];

				console.log(response[key]);

			}

			}		

		});

	}

} // End of synonyms function