function omba (){

	var title = baton;
	var query_url = "https://www.omdbapi.com/?t=" + title + "&y=&plot=full&callback=&tomatoes=true&r=json";
 
	console.log(query_url);
	// Ajax call for the response of omba
	$.ajax({
		url: query_url,
		method: 'GET'
	}).done(function(response) {

		// Clear out main display
		$("#main-display").html("");

		// This is for the mdbootstrap table
		// http://mdbootstrap.com/css/tables/

		// Creates div for table
		var div_table = $("<div>");

		// Add class for responsive size
		div_table.attr({
			"class": "col-xs-12 col-sm-6 col-md-8"
		});

		// This for the poster of the movie if it has a poster
		var div_poster = $("<div>");

		// Add class for responsive 
		div_poster.attr({
			"class": "col-xs-6 col-md-4"
		});

		// Create a table
		var table = $("<table>");

		// Adding class for it
		table.attr({
			"class": "table table-inverse"
		});

		// div_table -> main-display
		div_table.appendTo("#main-display");

		// div_poser -> main-display
		div_poster.appendTo("#main-display");

		// table -> div_table
		table.appendTo(div_table);

		// Create a thead
		var thead = $("<thead>");

		// thead -> table
		thead.appendTo(table);

		// Creating trs
		var tr = $("<tr>");

		// tr -> thead
		tr.appendTo(thead);

		// Creates th
		var info = $("<th>");

		// Putting text on info of Key
		info.text("Key");

		// info -> tr
		info.appendTo(tr);

		// Creating  th
		var key_info = $("<th>");

		// Putting text of Info
		key_info.text("Info");

		// key_info -> tr
		key_info.appendTo(tr);

		// Create a tbody for the table
		var tbody = $("<tbody>");

		// tbody -> table
		tbody.appendTo(table);

		// Getting the keys of the response
		// Putting them into a var called keys
		var keys = Object.keys(response);

		/**
		 * Creates a Table
		 * @param  {key.length} var i             0 -> key.length
		 * @return {Makes a table}     Puts data of the movie into table
		 */
		for (var i = 0; i < keys.length; i++) {

			// Creates tr
			var tr_sub = $("<tr>");	

			// tr_sub -> tbody
			tr_sub.appendTo(tbody);

			// Taking poster out of the table
			if (keys[i] == "Poster") {


			} // End of If

			// Takes out any N/A
			else if (response[keys[i]] == "N/A"){

			} // End of else if

			// If it is not key of poster
			// Or data of N/A 
			else {

				// Create a th
				var th = $("<th>");

				// Adding scope to th
				th.attr({
					"scope": "row"
				});

				// Adding text to th 
				// Text of the key in order
				th.text(keys[i]);

				// th -> tr_sub
				th.appendTo(tr_sub);

			} // End of if else if else else

			// If there is a movie poster  
			// Then it will go into this logic
			// Place the poster img into the div_poster
			if (keys[i] == "Poster" && response[keys[i]] != "N/A") {

				// Create a img 
				var img = $("<img>")

				// Makes the img src to the poster url
				img.attr({
					"src" : response[keys[i]]
				});

				// img -> div_poset
				img.appendTo(div_poster);

			} // End of If

			// If the data is N/A we don't make it 
			else if (response[keys[i]] == "N/A") {

			} // End of Else If 

			// If it is the url 
			// Make it live anchor
			else if (keys[i] == "tomatoURL") {

				// Create anchor
				var a = $("<a>");

				// Put the value of href
				// Of the tomotoes website
				a.attr({
					"href": response[keys[i]],
					"target": "_blank"
				})

				// Put the text of the url on it
				a.text(response[keys[i]]);

				// Creates td
				var td = $("<td>");

				// a -> td
				a.appendTo(td);

				// a -> tr_sub
				td.appendTo(tr_sub);

			} // End of Else If

			// If the key is Genre makes the
			// Data clickable to update baton
			else if (keys[i] == "Genre") {

				// Splits the string into an array
				var genre = response.Genre.split(", ");

				// Create a td
				var td = $("<td>");

				/**
				 * Making buttons for genre
				 * @param  {genre.lenght} var j             0 -> genra.length
				 * @return {Clickable buttons}     Making the buttons for genra
				 */
				for (var j = 0; j < genre.length; j++) {
					
					// Creates button
					var btn = $("<button>");

					// Putting attr to the btn
					// Makes the btn mdbootstrap
					btn.attr({
						"data-index": genre[j],
						"class": "btn btn-primary btn-sm related"
					});

					// Putting text on the btn
					// Text of the genre
					btn.text(genre[j]);

					// btn -> tb
					btn.appendTo(td);

					// td -> tr_sub
					td.appendTo(tr_sub);

				} // End of For Loop J

			} // End of Else If 

			// If the key is director makes the
			// Data clickable to update baton
			else if (keys[i] == "Director") {

				// Splits the string into an array
				var director = response.Director.split(", ");

				// Create a td
				var td = $("<td>");

				/**
				 * Making buttons for director
				 * @param  {genre.lenght} var j             0 -> genra.length
				 * @return {Clickable buttons}     Making the buttons for genra
				 */
				for (var k = 0; k < director.length; k++) {
					
					// Create a button
					var btn = $("<button>");

					// Added attr
					btn.attr({
						"data-index": director[k],
						"class": "btn btn-primary btn-sm related"
					});

					// Putting text on the btn
					// Text of the director
					btn.text(director[k]);

					// btn -> td
					btn.appendTo(td);

					// td -> tr_sub
					td.appendTo(tr_sub);

				} // End Foor Loop

			// If the key is actor makes the
			// Data clickable to update baton
			} else if(keys[i] == "Actors") {

				// Splits the string into an array
				var actors = response.Actors.split(", ");

				// Create a td
				var td = $("<td>");

				/**
				 * Making buttons for actors
				 * @param  {genre.lenght} var j             0 -> genra.length
				 * @return {Clickable buttons}     Making the buttons for genra
				 */
				for (var l = 0; l < actors.length; l++) {
					
					// Create a button
					var btn = $("<button>");

					// Added 
					btn.attr({
						"data-index": actors[l],
						"class": "btn btn-primary btn-sm related"
					});

					// Putting text on the btn
					// Text of the actors
					btn.text(actors[l]);

					// btn -> td
					btn.appendTo(td);

					// td -> tr_sub
					td.appendTo(tr_sub);

				} // End of For Loop

			} // End of Else If

			// If it is not the poster,director,actors then
			// It just does it regualar
			else {

				// Creates a td
				var td = $("<td>");

				// Putting text on td
				// Text of data of keys
				td.text(response[keys[i]]);

				td.appendTo(tr_sub);

			} // End of If Else statement

		} // End of For Loop I

	// On Click Event for the related search
	$(".related").on("click", function() {

        console.log("synonym click");

        var synonym_click = $(this);

        var synonym_pick = synonym_click.data("index");

        console.log("Synonym pick is " + synonym_pick);

        baton = synonym_pick;

        ajax();

        console.log('The baton is ' + baton);

       updated_category_box();

        search_history_add(baton, search_history_record);


    }); // End of synonyms click event

	}); // End of Ajax Request


} // End for omba function