//will expand div when user presses magnifying glass

function expand_category_box() {

    $("#category").animate({height: '150px'});

    $(".button_div").animate({top: '25px'});

    var display_word = $("#user-input").val().trim();

   $(".display_user_word").addClass("animated fadeInDown");

   $(".display_user_word").text(display_word);

   $(".display_user_word").css("margin-bottom", "0px");

    $("#main-display").html("");

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

	var category = ["Dictionary" , "Wikipedia" , "YouTube" , "Giphy" , "Flickr" , "Movies"];

	var div_main = $("<div>");

	div_main.attr({
		"class":       "container-fluid",
		"align":       "center",
		"data-toggle": "buttons",
		"id":          "category"
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

	for (var i = 0; i < category.length; i++) {

		var label = $("<label>");

		label.attr({
			"class": "category_buttons btn rick",
			"data-toggle": "tooltip",
			"data-placement":"bottom",
			"title": "Click Here For " + category[i],
			"data-name": category[i].toLowerCase()
		});

		label.appendTo(sub_div);

		var input = $("<input>");

		input.attr({
			"type": "radio",
			"data-name": category[i].toLowerCase(),
			"id": "option" + i,
			"autocomplete": "off"
		});

		input.appendTo(label);

		var category_headers = $("<h6>");

		category_headers.addClass("animated fadeInDown");

		category_headers.text(category[i]);

		category_headers.appendTo(label);

	} // End of For Loop I

 $(".category_buttons").on("click", function() {
        var user_category_click = $(this);
        var user_category_pick = user_category_click.data("name");
        console.log(user_category_click);
        console.log(user_category_pick);
        if (user_category_pick == "dictionary") {

        	//valid();

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




/*       

<div class="container-fluid" align="center" data-toggle="buttons" id="category">
    <h2 class="display_user_word" align="center"></h2>
    <div class="button_div">
    <label class="category_buttons btn rick" data-name="dictionary" data-toggle="tooltip" data-placement="bottom" title="click here for dictionary">
        <input type="radio" data-name="dictionary" id="option1" autocomplete="off" checked> <h6>Dictionary</h6>        
    </label>
    <label class="category_buttons btn rick" data-name="wikipedia" data-toggle="tooltip" data-placement="bottom" title="click here for wikipedia">
        <input type="radio" data-name="wikipedia" id="option2" autocomplete="off"> <h6>Wikipedia</h6> 
    </label>
    <label class="category_buttons btn rick" data-name="youtube" data-toggle="tooltip" data-placement="bottom" title="click here for youtube">
        <input type="radio" data-name="youtube" id="option3" autocomplete="off"> <h6>Youtube</h6> 
    </label>
    <label class="category_buttons btn rick" data-name="giphy" data-toggle="tooltip" data-placement="bottom" title="click here for giphy">
        <input type="radio" data-name="giphy"  id="option4" autocomplete="off"> <h6>Giphy</h6> 
    </label>
    <label class="category_buttons btn rick" data-name="flickr" data-toggle="tooltip" data-placement="bottom" title="click here for google images">
        <input type="radio" data-name="google_images"  id="option5" autocomplete="off"> <h6>Flickr</h6> 
    </label>
    </div>
</div>

*/



