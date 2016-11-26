function omba (){

	var title = baton;
	var queryURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=full&tomatoes=true&r=json";
 
	console.log(queryURL);

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response) {

		 $("#main-display").html("");

		var div_table = $("<div>");

		div_table.attr({
			"class": "col-xs-12 col-sm-6 col-md-8"
		});

		var div_poster = $("<div>");

		div_poster.attr({
			"class": "col-xs-6 col-md-4"
		});

		var table = $("<table>");

		table.attr({
			"class": "table table-inverse"
		});

		div_table.appendTo("#main-display");
		div_poster.appendTo("#main-display");

		table.appendTo(div_table);

		var thead = $("<thead>");

		thead.appendTo(table);

		var tr = $("<tr>");

		tr.appendTo(thead);

		var info = $("<th>");

		info.text("Key");

		info.appendTo(tr);

		var key_info = $("<th>");

		key_info.text("Info");

		key_info.appendTo(tr);

		var tbody = $("<tbody>");

		tbody.appendTo(table);

		var keys = Object.keys(response);
	
		console.log(response);
		console.log(keys);

		var names = [];

		names = response.Actors.split(", ");

		console.log(names);

		for (var i = 0; i < keys.length; i++) {


			var tr_sub = $("<tr>");	

			tr_sub.appendTo(tbody);

			if (keys[i] == "Poster") {


			} else if (response[keys[i]] == "N/A"){


			} else {

				var th = $("<th>");

				th.attr({
					"scope": "row"
				});

				th.text(keys[i]);

				th.appendTo(tr_sub);
			}

			if (keys[i] == "Poster" && response[keys[i]] != "N/A") {

				var img = $("<img>")

				img.attr({
					"src" : response[keys[i]]
				});

				img.appendTo(div_poster);

			} else if (response[keys[i]] == "N/A") {

			} else if (keys[i] == "tomatoURL") {

				var a = $("<a>");

				a.attr({
					"href": response[keys[i]]
				})

				a.text(response[keys[i]]);

				var td = $("<td>");

				a.appendTo(td);

				td.appendTo(tr_sub);

			}else if (keys[i] == "Genre") {

				var genre = response.Genre.split(", ");

				console.log(genre);
				console.log(genre.length);

				var td = $("<td>");

				for (var j = 0; j < genre.length; j++) {
					
					var btn = $("<button>");

					btn.attr({
						"data-index": genre[j],
						"class": "btn btn-primary btn-sm related"
					});

					btn.text(genre[j]);

					btn.appendTo(td);

					td.appendTo(tr_sub);

				} // End of For Loop J

			} else if (keys[i] == "Director") {

				var director = response.Director.split(", ");

				var td = $("<td>");

				for (var k = 0; k < director.length; k++) {
					
					var btn = $("<button>");

					btn.attr({
						"data-index": director[k],
						"class": "btn btn-primary btn-sm related"
					});

					btn.text(director[k]);

					btn.appendTo(td);

					td.appendTo(tr_sub);

				}

			} else if(keys[i] == "Actors") {

				var actors = response.Actors.split(", ");

				var td = $("<td>");

				for (var l = 0; l < actors.length; l++) {
					
					var btn = $("<button>");

					btn.attr({
						"data-index": actors[l],
						"class": "btn btn-primary btn-sm related"
					});

					btn.text(actors[l]);

					btn.appendTo(td);

					td.appendTo(tr_sub);

				}

			} else {

				var td = $("<td>");

				td.text(response[keys[i]]);

				td.appendTo(tr_sub);

			} // End of If Else statement

		} // End of For Loop I

	$(".related").on("click", function() {

        console.log("synonym click");

        var synonym_click = $(this);

        var synonym_pick = synonym_click.data("index");

        console.log("Synonym pick is " + synonym_pick);

        baton = synonym_pick;

        ajax();

        console.log('The baton is ' + baton);

       updated_category_box();

        //event_listener();


    }); // End of synonyms click event

	}); // End of Ajax Request


} // End for omba function