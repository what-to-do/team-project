function synonyms(){
	console.log(baton);
	var word = baton;
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

		$("#synonyms-ul").empty();

		for (var i = 0; i < response.synonyms.length; i++) {
			var li = $("<li>");
			var synonyms = $("<a>");


			li.attr({"id": "result" + [i]})
			synonyms.attr({"href": "#"})
			synonyms.addClass("waves-effect");
			/*synonyms.addClass("related list-group-item");*/

			synonyms.attr({
				"data-index": response.synonyms[i]
			});

			synonyms.text(response.synonyms[i]);

			$("#synonyms-ul").append(li);
			$("result" + [i]).append(synonyms);

		} // End of For Loop

		event_listener();

	}); // End of ajax of synonyms

	

} // End of synonyms function