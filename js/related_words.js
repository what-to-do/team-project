function related(word){

	console.log(word);
	
	var user = word;

	//var names_options = ["antonyms" , "categories" , "holonyms" , "hyponyms" , "meronyms" , "similar"];

	var related_options = ["antonyms" , "hasCategories" , "partOf" , "hasTypes" , "hasParts" , "similarTo" ,"synonyms"];

	console.log(related_options);

	for (var i = 0; i < related_options.length; i++) {



		var related_url = "https://wordsapiv1.p.mashape.com/words/" + user +"/" + related_options[i]

		console.log(related_url);

		// Ajax request to wordsapi 
		// Will return the synonyms of the searched word
		$.ajax({
		    url: related_url, // The URL to the API. You can get this in the API page of the API you intend to consume
		    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		    beforeSend: function(xhr) {
		    xhr.setRequestHeader("X-Mashape-Authorization", "JVsFpSsea5mshtsH7N5dZQOYQd0yp1dqScujsnjdKNIoipqLfS"); // Enter here your Mashape key
		    }

		}).done(function(response){

			//var related_options = ["antonyms" , "hasCategories" , "partOf" , "hasTypes" , "hasParts" , "similarTo" ,"synonyms"];

			for (var j = 0; j < related_options.length; j++) {

				var key = related_options[j];

				if (response[key] && response[key].length > 0) {

					

					console.log(response[key]);

			}

			}		

		});

	}

} // End of synonyms function