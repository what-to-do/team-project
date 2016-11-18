function create_sidebar_btn(){

	/**
	 * Names of the buttons inside search-list
	 * @type {Strings}
	 */
	var btn_names_related = ["Past" , "Synonyms"];

	// initialize the search history record for the entire application
	var search_history_record = new Array();

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