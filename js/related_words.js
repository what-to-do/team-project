function related(){
	console.log(baton);
	var word = "die";


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


			var names_options = ["antonyms-ul" , "categories-ul" , "holonyms-ul" , "hyponyms-ul" , "meronyms-ul" , "similar-ul"];

			var hey = '"' + related_options[0] +  '"';

			console.log(hey);

			console.log(response["related_options[0]"]);

/*			for (var i = 0; i < names_options.length; i++) {

			
				$("'." + names_options[i] + "'").empty();

				for (var j = 0; j < response.synonyms.length; j++) {
					var li = $("<li>");
					var synonyms = $("<a>");
				
					synonyms.addClass("waves-effect related");
					synonyms.addClass("related list-group-item");

					synonyms.attr({
						"data-index": response.synonyms[j]
					});

					synonyms.text(response.synonyms[j]);

					$("#synonyms-ul").append(lj);
					

				} // End of For Loop


					$.each(response.corrections, function(c) {
					$("#main-display").append("<br>");
					$("#main-display").append(response.corrections[c].join("<br>"));
  						console.log(response.corrections[c]);

					});

			}
			event_listener();

			console.log(response);*/

		}); // End of ajax of synonyms

	}

} // End of synonyms function