
//will expand div when user presses magnifying glass

function expand_category_box() {

    $("#category").animate({height: '150px'});

    $(".button_div").animate({top: '25px'});

    var display_word = baton;

   $(".display_user_word").addClass("animated fadeInDown");

   $(".display_user_word").text(display_word);

   $(".display_user_word").css("margin-bottom", "0px");



};//end of expand_category_box

function updated_category_box(){

	var display_word = baton;

    $("#category").animate({height: '150px'});

    $(".button_div").animate({top: '25px'});

   $(".display_user_word").text(display_word);

   $(".display_user_word").css("margin-bottom", "0px");

   $(".display_user_word").addClass("fadeInDown");

   $("#main-display").html("");

} // End of updated_category_box function


function category_bar() {

	 $("#category-div").html("");

	var div_main = $("<div>");

	div_main.attr({
		"class":         "container-fluid",
		"align":         "center",
		"data-toggle":   "buttons",
		"id":            "category",
		"data-intro":    "Click on a category button to display the response on the page.",
		"data-step":     "2",
		"data-position": "auto"
	});

	$(div_main).appendTo("#category-div");

	var display_word = $("<h2>");

	display_word.attr({
		"class": "display_user_word",
		"align": "center"
	});

	display_word.appendTo(div_main);

	var sub_div = $("<div>");

	sub_div.attr({
		"class": "button_div"
	});

	sub_div.appendTo(div_main);

    if ($("#mode").prop('checked')) {

    	$('.container-fluid').css('background-color', '#263238');

    	$('.category_buttons').css('background-color', '#263238');

    	$('.display_user_word').css('color', '#fafafa');

		$('h6').css('color', '#fafafa');

		$('.paging-button').css('background-color', '#263238');

		$('.paging-button').css('color', '#fafafa');

    	}
    else {
    	$('.container-fluid').css('background-color', '#fafafa');

    	$('.category_buttons').css('background-color', '#fafafa');

    	$('.display_user_word').css('color', 'black');

    	$('h6').css('color', 'black');

    	$('.paging-button').css('background-color', '#fafafa');
			
			$('.paging-button').css('color', '#263238');
    	}; //end of css style

	for (var i = 0; i < possible_categories.length; i++) {

		var label = $("<label>");

		label.attr({
			"class": "category_buttons btn rick",
			"data-name": possible_categories[i].toLowerCase()
		});

		label.appendTo(sub_div);

		var input = $("<input>");

		input.attr({
			"type": "radio",
			"data-name": possible_categories[i].toLowerCase(),
			"id": "option" + i,
			"autocomplete": "off"
		});

		input.appendTo(label);

		var category_headers = $("<h6>");

		category_headers.addClass("animated fadeInDown");

		category_headers.text(possible_categories[i]);

		category_headers.appendTo(label);

		if ($("#mode").prop('checked')) {

    		$('.category_buttons').css('background-color', '#263238');

    		$('h6').css('color', '#fafafa');

			$('.paging-button').css('background-color', '#263238');

			$('.paging-button').css('color', '#fafafa');


    	} else {

    		$('.container-fluid').css('background-color', '#fafafa');

    		$('.category_buttons').css('background-color', '#fafafa');

    		$('.paging-button').css('background-color', '#fafafa');
			
			$('.paging-button').css('color', '#263238');

    	}; //end of css style

	} // End of For Loop I



 $(".category_buttons").on("click", function() {
 	
        var user_category_click = $(this);

        var user_category_pick = user_category_click.data("name");

        console.log(user_category_click);

        console.log(user_category_pick);


        if (user_category_pick == "dictionary") {

            dictionary();

        } else if (user_category_pick == "wikipedia") {

            wikipedia();

        } else if (user_category_pick == "youtube") {

            youtube();

        } else if (user_category_pick == "giphy") {
        	
            giphy();

        } else if (user_category_pick == "flickr") {
        	
            flickr();

        } else if (user_category_pick == "movies"){

        	omba();

        }// End of If Else

    }); // End of category_buttons click event

} //End of category_bar function