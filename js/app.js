$(document).ready(function() {



var word = "dance";
var synonyms_url = "https://wordsapiv1.p.mashape.com/words/" + word +"/synonyms"

// Ajax request to wordsapi 
// Will return the synonyms of the searched word
$.ajax({
    url: synonyms_url, // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) { console.dir((data.source)); console.log(data);},
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "JVsFpSsea5mshtsH7N5dZQOYQd0yp1dqScujsnjdKNIoipqLfS"); // Enter here your Mashape key
    }


}).done(function(response){


	console.log(response);

	/**
	 * Will loop over the aviable synonyms of the searched word
	 * @param  {Pass in the object and its length} var i             Loops over the object
	 * @return {Will go to the page in the future}     Allows the user to see the synonyms for their choosen word
	 */
	for (var i = 0; i < response.synonyms.length; i++) {
		
		console.log(response.synonyms[i]);

	}


});


});