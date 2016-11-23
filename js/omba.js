function omba (){

	var title = baton;
	var queryURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json";

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response) {

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

		for (var i = 0; i < keys.length; i++) {


			var tr_sub = $("<tr>");	

			tr_sub.appendTo(tbody);

			if (keys[i] != "Poster") {

				var th = $("<th>");

				th.attr({
					"scope": "row"
				});

				th.text(keys[i]);

				th.appendTo(tr_sub);

			} 

			if (keys[i] == "Poster") {

				var img = $("<img>")

				img.attr({
					"src" : response[keys[i]]
				});

				img.appendTo(div_poster);

			} else {

				var td = $("<td>");

				td.text(response[keys[i]]);

				td.appendTo(tr_sub);

			} // End of If Else statement

		} // End of For Loop I



	}); // End of Ajax Request


} // End for omba function