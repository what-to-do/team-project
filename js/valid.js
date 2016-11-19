function valid(){

	var word = baton;
	var synonyms_url = "https://wordsapiv1.p.mashape.com/words/" + word +"/synonyms"

	// Ajax request to wordsapi 
	// Will return the synonyms of the searched word
	$.ajax({
	    url: synonyms_url, // The URL to the API. You can get this in the API page of the API you intend to consume
	    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
	    data: {}, // Additional parameters here
	    dataType: 'json',
	    success: function(data) { },
	    error: function(err) { wrong() },
	    beforeSend: function(xhr) {
	    xhr.setRequestHeader("X-Mashape-Authorization", "JVsFpSsea5mshtsH7N5dZQOYQd0yp1dqScujsnjdKNIoipqLfS"); // Enter here your Mashape key
	    }


	}).done(function(response){
		related(); 
		

	}); // End of ajax of synonyms

} // End of Valid function


function wrong(){

	 $("#main-display").html("");
	 $("#main-display").append("Sorry that is not a valid word");


	var word = baton;
	var check = "https://montanaflynn-spellcheck.p.mashape.com/check/?text=" + word;

	// Ajax request to wordsapi 
	// Will return the synonyms of the searched word
	$.ajax({
	    url: check, // The URL to the API. You can get this in the API page of the API you intend to consume
	    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
	    data: {}, // Additional parameters here
	    dataType: 'json',
	    success: function(data) { console.dir((data.source)); console.log(data);},
	    error: function(err) { wrong(word) },
	    beforeSend: function(xhr) {
	    console.log(check);
	    xhr.setRequestHeader("X-Mashape-Authorization", "JVsFpSsea5mshtsH7N5dZQOYQd0yp1dqScujsnjdKNIoipqLfS"); // Enter here your Mashape key
	    }

	

	}).done(function(response){

		var key = baton

		var result = response.corrections[key];

		console.log(result);

		$("#main-display").append(result.join("<br>"));



	}); // End of ajax of synonyms


/*	 var key = "d893317c34c8451fb88f15868cd79b05";

	 var words = word;
	 console.log(words);
        var params = {
            // Request parameters
            "text": words,
            "mode": "spell",
            "preContextText": "{string}",
            "postContextText": "{string}",
            "mkt": "{string}",
        };
      
        $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v5.0/spellcheck/?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","d893317c34c8451fb88f15868cd79b05");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
            console.log(data);
            //console.log(data.flaggedTokens[0].suggestions[0].suggestion);

            $("#main-display").append("<br>");
            $("#main-display").append("Do you mean " + data.flaggedTokens[0].suggestions[0].suggestion);
        })
        .fail(function() {
            alert("error");
        });*/

} // End of wrong function

