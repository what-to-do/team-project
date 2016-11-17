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
})