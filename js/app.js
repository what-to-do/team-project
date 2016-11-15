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

		search_history();
		
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

function search_history() {

	$("#search-list").empty();

	// reusing code from synonyms() in order to create
	// Past and Synonyms buttons after emptying content of div upon reset

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

	// past searches are saved in search_history_record in local storage
	// open search_history_record, iterate through items
	// create buttons for each record in search_history_record

	for (var j = 0; j < search_history_record.length; j++) {

		var btns_search_history = $("<button>");

		btns_search_history.addClass("searching btn btn-outline-success waves-effect");

		btns_search_history.attr({
			"data-index": search_history_record[i].toLowerCase()
		});

		btns_search_history.text(btns_search_history[i]);

		$("#search-list").append(btns_search_history);

	}

}

}); // End of document.ready