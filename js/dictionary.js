function dictionary(){

	//console.log(word);
	console.log("Dance Monkey");
	var user = "example";

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

			$("#main-display").html("");


			var wrapper = $("<div>");

			wrapper.addClass("accordion");
			wrapper.attr({
				"id": "accordion",
				"role": "tablist",
				"aria-multiselectable": "true"
			});




			$("#main-display").html(wrapper);
			$("#main-display").html("hello world");





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