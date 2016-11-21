function dictionary(word){

	//console.log(word);
	
	var user = word;

	//var names_options = ["antonyms" , "categories" , "holonyms" , "hyponyms" , "meronyms" , "similar"];

	//var related_options = ["antonyms" , "hasCategories" , "partOf" , "hasTypes" , "hasParts" , "similarTo" ,"synonyms"];

	//console.log(related_options);


		var related_url = "https://wordsapiv1.p.mashape.com/words/" + user;

		console.log(related_url);

		// Ajax request to wordsapi 
		// Will return the synonyms of the searched word
		$.ajax({
		    url: related_url, // The URL to the API. You can get this in the API page of the API you intend to consume
		    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		    beforeSend: function(xhr) {
		    xhr.setRequestHeader("X-Mashape-Authorization", "JVsFpSsea5mshtsH7N5dZQOYQd0yp1dqScujsnjdKNIoipqLfS"); // Enter here your Mashape key
		    }

		}).done(function(response){

				//var related_options = ["antonyms" , "hasCategories" , "partOf" , "hasTypes" , "hasParts" , "similarTo" ,"synonyms"];
				console.log(response);

				var hello = Object.keys(response.results);

				$("#main-display").html("");


				var wrapper = $("<div>");

				wrapper.addClass("accordion");
				wrapper.attr({
					"id": "accordion",
					"role": "tablist",
					"aria-multiselectable": "true"
				});

				$("#main-display").html(wrapper);

			console.log(response.results.length);

			for (var j = 0; j < response.results.length; j++) {

				var keys = Object.keys(response.results[j]);

				var div_panel = $("<div>");

				div_panel.addClass("panel panel-default");

				var div_header = $("<div>");

				div_header.addClass("panel-heading");

				div_header.attr({
					"role": "tab",
					"id":"heading" + j
				});

				var h = $("<h5>");

				h.addClass("panel-title");

				var anchor = $("<a>");

				anchor.attr({
					"class":         "arrrow-r",
					"data-toggle":   "collapse",
					"data-parent":   "#accordion",
					"href":          "#collapse" + j,
					"aria-expanded": "true",
					"aria-controls": "collapse" + j

				});

				anchor.text(response.results[j].definition);

				var i = $("<i>");

				i.addClass("fa fa-angle-down rotate-icon");

				var div_body = $("<div>");

				div_body.attr({
					"id": "collapse" + j,
					"class": "panel-collapse collapse",
					"role": "tabpanel",
					"aria-labelledby": "headingOne",
					"aria-expanded": "false"
				});

				$(div_panel).appendTo(wrapper);
				$(div_header).appendTo(div_panel);
				$(h).appendTo(div_header);
				$(anchor).appendTo(h);
				$(i).appendTo(anchor);
				$(div_body).appendTo(div_panel);

				var nav_bar = $("<ul>");

				nav_bar.attr({
					"class": "nav nav-tabs red tabs-" + keys.length,
					"role": "tablist"
				});

				for (var n = 0; n < keys.length; n++) {

					console.log(keys);
					var list = $("<li>");

					list.attr({
						"class": "nav-item"
					});

					var anchor_nav = $("<a>");

					anchor_nav.attr({
						"class": "nav-link active",
						"data-toggle": "tab",
						"href": "#panel" + n,
						"role": "tab"
					});

					var nav_div = $("<div>");

					nav_div.attr({
						"class": "tab-content card"
					});

					var div_pane = $("<div>");

					nav_div.attr({
						"class": "tab-pane fade in active",
						"id": "panel" + n,
						"role": "tabpanel"
					});

					anchor_nav.text(keys[n]);
						$(anchor_nav).appendTo(list);
						$(list).appendTo(nav_bar);

				}
							
					$(nav_bar).appendTo(div_body);
			
				
				
				
/*
				for (var m = 0; m < response.results[j].synonyms.length; m++) {

					var synonyms_btn = $("<button>");

					synonyms_btn.attr({
						"data-index": response.results[j].synonyms[m]
					});

					synonyms_btn.text(response.results[j].synonyms[m]);

					$(div_body).append(synonyms_btn);
					
				}*/

				// $(div_body).append("The type of Word is a " + response.results[j].partOfSpeech + "<br>");
				// $(div_body).append("Synonyms " + response.results[j].synonyms.join("<br>") + "<br>");
				// $(div_body).append("Has type of thoughts of " + response.results[j].typeOf.join("<br>") + "<br>");
				// $(div_body).append("Has thoughts of  " + response.results[j].hasTypes.join("<br>") + "<br>");
				// $(div_body).append("Derivation(s) " + response.results[j].derivation.join("<br>") + "<br>");

			}

		});

	

} // End of synonyms function

// {
//   "word": "example",
//   "results": [
//     {
//       "definition": "a representative form or pattern",
//       "partOfSpeech": "noun",
//       "synonyms": [
//         "model"
//       ],
//       "typeOf": [
//         "representation",
//         "internal representation",
//         "mental representation"
//       ],
//       "hasTypes": [
//         "prefiguration",
//         "archetype",
//         "epitome",
//         "guide",
//         "holotype",
//         "image",
//         "loadstar",
//         "lodestar",
//         "microcosm",
//         "original",
//         "paradigm",
//         "pilot",
//         "prototype",
//         "template",
//         "templet",
//         "type specimen"
//       ],
//       "derivation": [
//         "exemplify"
//       ],
//       "examples": [
//         "I profited from his example"
//       ]
//     },
//     {
//       "definition": "something to be imitated",
//       "partOfSpeech": "noun",
//       "synonyms": [
//         "exemplar",
//         "good example",
//         "model"
//       ],
//       "typeOf": [
//         "ideal"
//       ],
//       "hasTypes": [
//         "pacemaker",
//         "pattern",
//         "beauty",
//         "prodigy",
//         "beaut",
//         "pacesetter"
//       ],
//       "derivation": [
//         "exemplify",
//         "exemplary"
//       ]
//     },
//     {
//       "definition": "an occurrence of something",
//       "partOfSpeech": "noun",
//       "synonyms": [
//         "case",
//         "instance"
//       ],
//       "typeOf": [
//         "happening",
//         "natural event",
//         "occurrence",
//         "occurrent"
//       ],
//       "hasTypes": [
//         "clip",
//         "mortification",
//         "piece",
//         "time",
//         "humiliation",
//         "bit"
//       ],
//       "derivation": [
//         "exemplify"
//       ],
//       "examples": [
//         "but there is always the famous example of the Smiths"
//       ]
//     },
//     {
//       "definition": "an item of information that is typical of a class or group",
//       "partOfSpeech": "noun",
//       "synonyms": [
//         "illustration",
//         "instance",
//         "representative"
//       ],
//       "typeOf": [
//         "information"
//       ],
//       "hasTypes": [
//         "excuse",
//         "apology",
//         "specimen",
//         "case in point",
//         "sample",
//         "exception",
//         "quintessence",
//         "precedent"
//       ],
//       "derivation": [
//         "exemplify",
//         "exemplary"
//       ],
//       "examples": [
//         "this patient provides a typical example of the syndrome",
//         "there is an example on page 10"
//       ]
//     },
//     {
//       "definition": "punishment intended as a warning to others",
//       "partOfSpeech": "noun",
//       "synonyms": [
//         "deterrent example",
//         "lesson",
//         "object lesson"
//       ],
//       "typeOf": [
//         "monition",
//         "admonition",
//         "word of advice",
//         "warning"
//       ],
//       "derivation": [
//         "exemplary"
//       ],
//       "examples": [
//         "they decided to make an example of him"
//       ]
//     },
//     {
//       "definition": "a task performed or problem solved in order to develop skill or understanding",
//       "partOfSpeech": "noun",
//       "synonyms": [
//         "exercise"
//       ],
//       "typeOf": [
//         "lesson"
//       ],
//       "examples": [
//         "you must work the examples at the end of each chapter in the textbook"
//       ]
//     }
//   ],
//   "syllables": {
//     "count": 3,
//     "list": [
//       "ex",
//       "am",
//       "ple"
//     ]
//   },
//   "pronunciation": {
//     "all": "ɪɡ'zæmpəl"
//   },
//   "frequency": 4.67
// }