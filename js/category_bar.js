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

	} // End of For Loop

} //End of category_bar function

// Tooltips Initialization	*/





$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})