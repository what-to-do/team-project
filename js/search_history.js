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

	


function search_history_add(baton, search_history_record) {
	// this function takes the baton,
	// searches the search history for it
	// if not present, the baton is pushed to the search history
	// then the search history is saved in local storage

	var found = false;

	for (var i = 0; i < search_history_record.length; i++) {

		if (baton === search_history_record[i]) {

			found = true;

		}

	}

	if (found === false && search_history_record.length < 10) {

		search_history_record.push(baton);

		localStorage["search_history_record"] = JSON.stringify(search_history_record);

		console.log(search_history_record);

	} else if (found === false && search_history_record.length >= 10) {

		search_history_record.shift();

		search_history_record.push(baton);

		localStorage["search_history_record"] = JSON.stringify(search_history_record);

		console.log(search_history_record);
		
	}
}

function search_history_retrieve(search_history_record) {
	// this function retrieves the search history record from local storage

	search_history_record = JSON.parse(localStorage["search_history_record"]);

}

