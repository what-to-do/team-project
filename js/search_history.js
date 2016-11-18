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

		var li = $("<li>")
		var search_result = $("<a>")

		li.attr({"id": "result" + [j]})
		search_result.attr({"href": "#"})
		search_result.addClass("waves-effect");
		search_result.text(search_history_record[j]);

		$("#past-ul").append(li);
		$("#result" + [j]).append(search_result);


		

	} // End of For Loop

	
	event_listener();

} // End of search_history function
search_history();

	