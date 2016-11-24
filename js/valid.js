function valid(){

	var word = baton;
	var test_url = "https://montanaflynn-spellcheck.p.mashape.com/check/?text=" + word;
	//debugger;
	// Ajax request to wordsapi 
	// Will return the synonyms of the searched word
	$.ajax({
	    url: test_url, // The URL to the API. You can get this in the API page of the API you intend to consume
	    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
	    data: {}, // Additional parameters here
	    dataType: 'json',
	    success: function(data) { },
	    error: function(err) { },
	    beforeSend: function(xhr) {
	    xhr.setRequestHeader("X-Mashape-Authorization", "JVsFpSsea5mshtsH7N5dZQOYQd0yp1dqScujsnjdKNIoipqLfS"); // Enter here your Mashape key
	    }


	}).done(function(response){
		console.log(response.suggestion);
		if (word == response.suggestion){

		}else {
			var key = baton

			var result = response.corrections[key];

			$("#main-display").append("I don't think you are thinking of a dictionary word type." + "<br>");
			$("#main-display").append("Try these out:" + "<br>");

			for (var i = 0; i < response.corrections[key].length; i++) {

				var btn = $("<button>");

				btn.text(result[i]);

				btn.addClass("btn btn-outline-default btn-rounded waves-effect related");

				btn.attr({
					"data-index": result[i]
				});


				$("#main-display").append(btn);
				$("#main-display").append("<br>");
		
			}

			console.log(result);

			
		}

    $(".related").on("click", function() {

        console.log("synonym click");

        var synonym_click = $(this);

        var synonym_pick = synonym_click.data("index");

        console.log("Synonym pick is " + synonym_pick);

        baton = synonym_pick;

        console.log('The baton is ' + baton);

       updated_category_box();

        //event_listener();


    }); // End of synonyms click event

	});
		
	

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
	    success: function(data) { },
	    error: function(err) { },
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

