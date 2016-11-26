function search_history() {

//	var search_history_record = new Array();

	$("#past-ul").empty();

	// past searches are saved in search_history_record in local storage
	// open search_history_record, iterate through items
	// create buttons for each record in search_history_record

	for (var j = 0; j < search_history_record.length; j++) {

		var li = $("<li>")
		var search_result = $("<a>")

		li.attr({"id": "result" + [j]})
		search_result.attr({"href": "#"})
		search_result.addClass("waves-effect");
		search_result.css("color", "black");
		search_result.text(search_history_record[j]);
		search_result.data("value", search_history_record[j]);

		$("#past-ul").append(li);
		$("#result" + [j]).append(search_result);
		$("#past-ul li").on("click", function() {
			console.log($(this).data("value") + " is value clicked in search history");
		});

		console.log("search_history()")
		
	} // End of For Loop

} // End of search_history function


function search_history_add(baton, search_history_record) {
	// this function takes the baton,
	// searches the search history for it
	// if not present, the baton is pushed to the search history
	// then the search history is saved in local storage
	console.log("call search_history_add");
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

		console.log("already in history " + search_history_record);

		
		
		
	}
	search_history();
}

function search_history_retrieve(search_history_record) {
	// this function retrieves the search history record from local storage

	search_history_record = JSON.parse(localStorage["search_history_record"]);

}

