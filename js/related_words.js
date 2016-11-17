function synonyms(){

	var word = "ey";
	var synonyms_url = "https://wordsapiv1.p.mashape.com/words/" + word +"/synonyms"

	// Ajax request to wordsapi 
	// Will return the synonyms of the searched word
	$.ajax({
	    url: synonyms_url, // The URL to the API. You can get this in the API page of the API you intend to consume
	    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
	    data: {}, // Additional parameters here
	    dataType: 'json',
	    success: function(data) { console.dir((data.source)); console.log(data);},
	    error: function(err) { alert(err); },
	    beforeSend: function(xhr) {
	    xhr.setRequestHeader("X-Mashape-Authorization", "JVsFpSsea5mshtsH7N5dZQOYQd0yp1dqScujsnjdKNIoipqLfS"); // Enter here your Mashape key
	    }


	}).done(function(response){

		console.log(response);

		$("#search-list").empty();

		for (var i = 0; i < response.synonyms.length; i++) {

			var synonyms = $("<button>");

			synonyms.addClass("synonyms list-group-item");

			synonyms.attr({
				"data-index": response.synonyms[i]
			});

			synonyms.text(response.synonyms[i]);

			$("#search-list").append(synonyms);

		} // End of For Loop

	}); // End of ajax of synonyms

	event_listener();

} // End of synonyms function