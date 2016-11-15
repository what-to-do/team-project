$(document).ready(function() {

/**
 * Names of the buttons inside search-list
 * @type {Strings}
 */
var btn_names_related = ["Past" , "Synonyms"];

/**
 * Creates button
 * @param  {btn_names_related size} var i             Will loop through as many button we need 
 * @return {Appends buttons}     Makes buttons inside the div of search-list
 */
for (var i = 0; i < btn_names_related.length; i++) {
	
	var btns_search = $("<button>");

	btns_search.addClass("searching btn btn-outline-success waves-effect");

	btns_search.attr({
		"data-index": btn_names_related[i].toLowerCase()
	});

	btns_search.text(btn_names_related[i]);

	$("#search-list").append(btns_search);
	

}

$("#search-list").append("<hr>");

/**
 * This will display what ever the user clicks on in search-list
 * @param  {Button} ){	var user_click    Possible pipes
 * @return {A list of button}         List of buttons based on what the user clicked on
 */
$(".searching").on("click" , function(){

	var user_click = $(this);
	var user_pick = user_click.data("index");

	console.log("User click is " + user_click);
	console.log("User pick is " + user_pick);

	if (user_pick == "synonyms") {

		synonyms();

	} else {

		// JEFF YOU FUNCTION GOES HERE
		
	}

}); // End of searching click event

function synonyms(){

	var word = "monkey";
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

		$("#search-list").empty();

		/**
		 * Names of the buttons inside search-list
		 * @type {Strings}
		 */
		var btn_names_related = ["Past" , "Synonyms"];

		/**
		 * Creates button
		 * @param  {btn_names_related size} var i             Will loop through as many button we need 
		 * @return {Appends buttons}     Makes buttons inside the div of search-list
		 */
		for (var i = 0; i < btn_names_related.length; i++) {
			
			var btns_search = $("<button>");

			btns_search.addClass("searching btn btn-outline-success waves-effect");

			btns_search.attr({
				"data-index": btn_names_related[i].toLowerCase()
			});

			btns_search.text(btn_names_related[i]);

			$("#search-list").append(btns_search);
			

		}

		$("#search-list").append("<hr>");

		console.log(response);

		/**
		 * Will loop over the aviable synonyms of the searched word
		 * @param  {Pass in the object and its length} var i             Loops over the object
		 * @return {Will go to the page in the future}     Allows the user to see the synonyms for their choosen word
		 */
		for (var i = 0; i < response.synonyms.length; i++) {
			
			console.log(response.synonyms[i]);

			var synonyms = $("<button>");

			synonyms.addClass("synonyms list-group-item");

			synonyms.attr({
				"data-index": response.synonyms[i]
			});

			synonyms.text(response.synonyms[i]);

			$("#search-list").append(synonyms);
		

		}


	}); // End of ajax of synonyms

}

}); // End of document.ready