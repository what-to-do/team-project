function dictionary(word){

	//console.log(word);
	
	var user = "example";

	//var names_options = ["antonyms" , "categories" , "holonyms" , "hyponyms" , "meronyms" , "similar"];

	//var related_options = ["antonyms" , "hasCategories" , "partOf" , "hasTypes" , "hasParts" , "similarTo" ,"synonyms"];

	//console.log(related_options);


		var related_url = "https://wordsapiv1.p.mashape.com/words/" + user;

		//console.log(related_url);

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
				//console.log(response);

				// Empties main display
				$("#main-display").html("");

				// Creates a wrapper for the tab.pill
				var wrapper = $("<div>");

				// Adding the class and attr. for it to work with mdbootstrap
				wrapper.addClass("accordion");
				wrapper.attr({
					"id": "accordion",
					"role": "tablist",
					"aria-multiselectable": "true"
				});

				// Put the wrapper to the page
				// Make a div of wrapper
				$("#main-display").html(wrapper);

			//console.log(response.results.length);

			/**
			 * Loops through the object
			 * @param  {Response resutls} var j             j is the # of results in response
			 * @return {Makes a collapsable panel}     Collapsable panels of the different meaning of baton
			 */
			for (var j = 0; j < response.results.length; j++) {

				// Returns the keys of response
			
				var keys = Object.keys(response.results[j]);

				// Panel for the meanings
				var div_panel = $("<div>");
				// Adds classes for mdbootstrap
				div_panel.addClass("panel panel-default");
				// Makes a div for the header
				var div_header = $("<div>");
				// Adds class for the panel heading
				div_header.addClass("panel-heading");
				// Adds header attr to it
				div_header.attr({
					"role": "tab",
					"id":"heading" + j
				});
				// Making a header
				var h = $("<h5>");
				// Added class for  mdbootstrap
				h.addClass("panel-title");
				// Making anchors for it to be clickable
				var anchor = $("<a>");
				// Adding attr. to anchor
				anchor.attr({
					"class":         "arrrow-r",
					"data-toggle":   "collapse",
					"data-parent":   "#accordion",
					"href":          "#collapse" + j,
					"aria-expanded": "true",
					"aria-controls": "collapse" + j

				});
				// Putting texts on the panel
				anchor.text(response.results[j].definition);
				// Adding icon
				var i = $("<i>");
				// Adding class for mdbootstrap
				i.addClass("fa fa-angle-down rotate-icon");
				// Making hidden div body
				var div_body = $("<div>");
				// Adding attr. on div body
				div_body.attr({
					"id": "collapse" + j,
					"class": "panel-collapse collapse",
					"role": "tabpanel",
					"aria-labelledby": "headingOne",
					"aria-expanded": "false"
				});
				// Now for the show
				// Making the elements created by jQuery to the page
				// div_panel -> wrapper
				$(div_panel).appendTo(wrapper);
				// div_header -> div_panel
				$(div_header).appendTo(div_panel);
				// h -> div header
				$(h).appendTo(div_header);
				// anchors - h
				$(anchor).appendTo(h);
				// i -> anchor
				$(i).appendTo(anchor);
				// div_body -> div_panel
				$(div_body).appendTo(div_panel);

				// End of collapsable Accordion
				// --------------------------------------------------------------------------------------
				// Beginning of nav-tabs
				// 
				// Making nav_bar for accordion
				var nav_bar = $("<ul>");

				// Adding attr. to nav_bar
				nav_bar.attr({
					"class": "nav nav-tabs red tabs-" + keys.length,
					"role": "tablist"
				});

				/**
				 * Loops the keys of the object response
				 * @param  {keys of the object respone} var n             [description]
				 * @return {Putting nav_bar on the page under header}     [description]
				 */
				for (var n = 0; n < keys.length; n++) {

					// Making a list item
					var list = $("<li>");
					// Adding attr 
					list.attr({
						"class": "nav-item"
					});
					// Making anchor 
					var anchor_nav = $("<a>");

					// Adding attr to the anchor
					anchor_nav.attr({
						"class": "nav-link",
						"data-toggle": "tab",
						"href": "#panel" + j + n,
						"role": "tab"
					});

					// Making div for the body
					var nav_div = $("<div>");

					// Adding attr. to nav_bar
					nav_div.attr({
						"class": "tab-content card"
					});

				for (var o = 0; o < keys.length; o++) {

					console.log(keys[o]); 
					var get = response.results[j][keys[o]];
					console.log(get);

					// Adding the spefic body div to div_pane
					var nav_pane = $("<div>");
					// Adding attr. to nav_div
					nav_pane.attr({
						"class": "tab-pane fade in active",
						"id": "panel" + j + o,
						"role": "tabpanel"
					});

					nav_pane.text(get);

					$(nav_pane).appendTo(nav_div);

				}	

					// Putting text on the anchor 
					anchor_nav.text(keys[n]);
					// Anchor_nav -> list
					$(anchor_nav).appendTo(list);
					// List -> nav_bar
					$(list).appendTo(nav_bar);

				
					

				}

				$(nav_bar).appendTo(div_body);
		
			
			


				$(nav_div).appendTo(div_body);
				
					
				//debugger;
				
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