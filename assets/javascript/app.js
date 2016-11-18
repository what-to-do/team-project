
var baton = "";

function event_listener(){

	$("#home").on("click", function() {
	    $("#side-nav").slideToggle();

	});

	//Tooltips Initialization
	$(function () {
	 $('[data-toggle="tooltip"]').tooltip()
	});

	//when user clicks on help button
	$("#help-button").on("click", function(){
		//if user click =true activate hover function until click false
		alert("Justin needs help");

	})

	$("#mag-glass").on("click" , function(){

		baton = $("#user-input").val().trim();
		
		console.log("The baton is " + baton);
		
		$("#main-display").append("<br>" + "Mag click " + baton);

		valid()

	}); // End of mag-glass click event

	//if user presses enter on search input
	$("#user-input").keydown(function(event){
		
		if(event.keyCode == 13) {
			baton = $("#user-input").val().trim();
			/*user_search.push(user_input);*/
			console.log("The baton is: " + baton);

			$("#main-display").append("<br>" + "By enter: " + baton);

			valid();

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

 $(".category_buttons").on("click", function() {
        var user_category_click = $(this);
        var user_category_pick = user_category_click.data("name");

        if (user_category_pick == "dictionary") {

            dictionary();

        } else if (user_category_pick == "wikipedia") {

            wikipedia();

        } else if (user_category_pick == "youtube") {

            youtube();

        } else if (user_category_pick == "giphy") {

            giphy();

        } // End of If Else

    }); // End of category_buttons click event

    $(".past_searches").on("click", function() {

        var past_searches_click = $(this);

        var past_searches_pick = past_searches_click.data("index");

        console.log(past_searches_pick);

        baton = past_searches_pick;

        console.log('The baton is ' + baton);

        $("#main-display").append("<br>" + "By past searches: " + baton);

       // event_listener();

    }); // End of past_searches click event


    $(".related").on("click", function() {

        console.log("synonym click");

        var synonym_click = $(this);

        var synonym_pick = synonym_click.data("index");

        console.log("Synonym pick is " + synonym_pick);

        baton = synonym_pick;

        console.log('The baton is ' + baton);

        $("#main-display").append("<br>" + "By related: " + baton);

        //event_listener();


    }); // End of synonyms click event

} // End of event_listener function


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
	    success: function(data) { console.dir((data.source)); console.log(data);},
	    error: function(err) { wrong() },
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
		console.log(word);
		console.log(response);
		var hey = Object.keys(response.corrections);
		console.log(hey);
		console.log(response.corrections +".lighht");
	$.each(response.corrections, function(c) {
	$("#main-display").append("<br>");
	$("#main-display").append(response.corrections[c].join("<br>"));
  	console.log(response.corrections[c]);

});


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


	event_listener();

} // End of wrong function

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
		
		var li = $("<li/>");
		var btns_search = $("<a/>");
		var div = $("<div/>");
		var ul = $("<ul/>");
		var icon = $("<i/>");
		
		icon.addClass("fa fa-angle-down rotate-icon");
		div.addClass("collapsible-body");
		div.css("display", "none")
		ul.attr({"id": btn_names_related[i].toLowerCase()})
		ul.text("test")
		btns_search.addClass("collapsible-header waves-effect arrow-r");

		btns_search.attr({
			"data-index": btn_names_related[i].toLowerCase(),
			/*adds Help ToolTips 
			"data-toggle": "tooltip",
			"data-placement": "bottom",
			"title": "click here for " + btn_names_related[i].toLowerCase()*/
		});

		//adds div and ul at the end of the results to come in
		btns_search.text(btn_names_related[i]);
		$("#side-nav-add").append(li);
		$(li).append(btns_search);
		$(btns_search).append(icon);
		$(btns_search).after(div);
		$(div).append("<ul/>")
		

	} // End of For Loop

	$(".hey").append("<hr>");

} // End of create_sidebar_btn function


function category_bar() {

	btn_options = ["dictionary", "wikipedia", "youtube", "giphy"];

	//loops through array and creates buttons, gives them data-names and index
	for (var i = 0; i < btn_options.length; i++) {

		var options = $("<button>");

		options.text(btn_options[i]);

		options.attr({"data-name": btn_options[i],
					  "data-index": btn_options[i],
					  //add tooltip help
					  "data-toggle": "tooltip",
					  "data-placement": "bottom",
					  "title": "click here for " + btn_options[i].toLowerCase() + " results"});

		options.addClass("btn btn-info category_buttons")

		$("#category").append(options);

		options.css("float", "right");

	} // End of For Loop

} //End of category_bar function

// Tooltips Initialization
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


// SideNav init
$(".button-collapse").sideNav();

// Custom scrollbar init
var el = document.querySelector('.custom-scrollbar');
Ps.initialize(el);


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

		$("#search-list").empty();

		for (var i = 0; i < response.synonyms.length; i++) {

			var synonyms = $("<button>");

			synonyms.addClass("related list-group-item");

			synonyms.attr({
				"data-index": response.synonyms[i]
			});

			synonyms.text(response.synonyms[i]);

			$("#search-list").append(synonyms);

		} // End of For Loop

		event_listener();

	}); // End of ajax of synonyms

	

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

$(document).ready(function() {

create_sidebar_btn();
category_bar();

// For testing of valid
// valid();

event_listener();



}); // End of document.ready
