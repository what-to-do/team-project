function search_history() {

//	var search_history_record = new Array();

	if (search_history_record != null) {

		$("#past-ul").empty();

		// past searches are saved in search_history_record in local storage
		// open search_history_record, iterate through items
		// create buttons for each record in search_history_record

		for (var j = 0; j < search_history_record.length; j++) {

			var li = $("<li>");

			var search_result = $("<a>");

			li.attr({"id": "result" + [j]});

			search_result.attr({"href": "#"});

			search_result.addClass("waves-effect");

			search_result.css("color", "black");

			search_result.text(search_history_record[j]);

			search_result.data("value", search_history_record[j]);

			$("#past-ul").append(li);

			$("#result" + [j]).append(search_result);

			
		} // End of For Loop J

			$("#past-ul li").on("click", function() {

				baton = $(this).text();

				ajax();

				updated_category_box();

			});

	}

} // End of search_history function


function search_history_add(baton, search_history_record) {
	// this function takes the baton,
	// searches the search history for it
	// if not present, the baton is pushed to the search history
	// then the search history is saved in local storage
	var found = false;

	if (search_history_record != null) {

		for (var i = 0; i < search_history_record.length; i++) {

			if (baton === search_history_record[i]) {

				found = true;

			} // End of If Statement

		} // End of For Loop I



		if (found === false && search_history_record.length < 10) {

			search_history_record.push(baton);

			localStorage["search_history_record"] = JSON.stringify(search_history_record);

			

		} else if (found === false && search_history_record.length >= 10) {

			search_history_record.shift();

			search_history_record.push(baton);

			localStorage["search_history_record"] = JSON.stringify(search_history_record);
			
		} // End of Else If

	} // End of If Statement

	search_history();

} // End of S=search history add function

function search_history_retrieve() {

	// this function retrieves the search history record from local storage

		var temp = localStorage.getItem("search_history_record");

		search_history_record = JSON.parse(temp);


} // End of search history retrieve function

