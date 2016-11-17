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