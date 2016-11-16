$(document).ready(function() {

var baton = "";

function event_listener(){

	//when user clicks on help button
	$("#help-button").on("click", function(){
		//if user click =true activate hover function until click false
		alert("Justin needs help");

	})

	$("#mag-glass").on("click" , function(){

		baton = $("#user-input").val().trim();

		console.log("The baton is " + baton);

	}); // End of mag-glass click event

	//if user presses enter on search input
	$("#user-input").keydown(function(event){
		
		if(event.keyCode == 13) {
			baton = $("#user-input").val().trim();
			/*user_search.push(user_input);*/
			console.log("The baton is: " + baton);
			return false;
		}
	}); // End of user-input keydown event
	
	$(".searching").on("click" , function(){

		var user_click = $(this);
		var user_pick = user_click.data("index");

		console.log("User click is " + user_click);
		console.log("User pick is " + user_pick);

		if (user_pick == "synonyms") {

			synonyms();

		}  else if (user_pick == "past") {

			search_history();
			
		} // End of If Else

	}); // End of searching click event



} // End of event_listener function

function create_sidebar_btn(){

	/**
	 * Names of the buttons inside search-list
	 * @type {Strings}
	 */
	var btn_names_related = ["Past" , "Synonyms"];

	/**
	 * Creates button
	 * @param  {btn_names_related size} var i   Will loop through as many button we need 
	 * @return {Appends buttons}     Makes bugirtttons inside the div of search-list
	 */
	for (var i = 0; i < btn_names_related.length; i++) {
		
		var btns_search = $("<button>");

		btns_search.addClass("searching btn btn-outline-success waves-effect");

		btns_search.attr({
			"data-index": btn_names_related[i].toLowerCase()
		});

		btns_search.text(btn_names_related[i]);

		$(".hey").append(btns_search);
		

	} // End of For Loop

	$(".hey").append("<hr>");

} // End of create_sidebar_btn function

/**
 * This will display what ever the user clicks on in search-list
 * @param  {Button} ){	var user_click    Possible pipes
 * @return {A list of button}         List of buttons based on what the user clicked on
 */
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

function search_history() {

	console.log("hey you");

	$("#search-list").empty();

	// reusing code from synonyms() in order to create
	// Past and Synonyms buttons after emptying content of div upon reset

	//create_sidebar_btn();

	// past searches are saved in search_history_record in local storage
	// open search_history_record, iterate through items
	// create buttons for each record in search_history_record

	//  the following line is for testing purposes of search_history only
	var search_history_record = ["dogs", "zebra", "the thing"];

	for (var j = 0; j < search_history_record.length; j++) {

		var btns_search_history = $("<button>");

		btns_search_history.addClass("past_searches searching list-group-item");

		btns_search_history.attr({
			"data-index": search_history_record[j].toLowerCase()
		});

		btns_search_history.text(search_history_record[j]);

		$("#search-list").append(btns_search_history);

	} // End of For Loop

	event_listener();

} // End of search_history function


// This will create buttons for each kind of entertainment or educational resource we want
function category_bar() {

	btn_options = ["dictionary", "wikipedia", "youtube", "giphy"];

	//loops through array and creates buttons, gives them data-names and index
	for (var i = 0; i < btn_options.length; i++) {

		var options = $("<button>");

		options.text(btn_options[i]);

		options.attr("data-name", btn_options[i]);

		options.attr ("data-index", btn_options[i]);

		options.addClass("btn btn-info category_buttons")

		$("#category").append(options);

		options.css("float", "right");

	} // End of For Loop

} //End of category_bar function

// Tooltips Initialization
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


create_sidebar_btn();
category_bar();

event_listener();

}); // End of document.ready