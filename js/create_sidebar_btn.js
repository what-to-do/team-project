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
			"data-index": btn_names_related[i].toLowerCase(),
			//adds Help ToolTips 
			"data-toggle": "tooltip",
			"data-placement": "bottom",
			"title": "click here for " + btn_names_related[i].toLowerCase()
		});

		btns_search.text(btn_names_related[i]);

		$(".hey").append(btns_search);
		

	} // End of For Loop

	$(".hey").append("<hr>");

} // End of create_sidebar_btn function