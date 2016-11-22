//will expand div when user presses magnifying glass

function expand_category_box() {

    $("#category").animate({height: '150px'});

    $(".button_div").animate({top: '25px'});

    var display_word = $("#user-input").val().trim();

   $(".display_user_word").text(display_word);

   $(".display_user_word").css("margin-bottom", "0px");

    };//end of expand_category_box





/*function category_bar() {
	//this ensures buttons are centered to the page when buttons are made
	$("#category").css("text-align", "center");

	btn_options = ["dictionary", "wikipedia", "youtube", "giphy"];

	//loops through array and creates buttons, gives them data-names and index
	for (var i = 0; i < btn_options.length; i++) {

		var options = $("<button>");

		options.text(btn_options[i]);

		options.attr({"data-name": btn_options[i],
					  "data-index": btn_options[i],
					  //add tooltip help
					  "data-toggle": "tooltip",
					  "data-toggle": "button",
					  "data-placement": "bottom",
					  "title": "click here for " + btn_options[i].toLowerCase() + " results"});

		options.addClass("btn btn-info category_buttons hoverable")

		$("#category").append(options);

	//} // End of For Loop

//} //End of category_bar function

<<<<<<< HEAD
// Tooltips Initialization	*/






