var search_term = "zebra";

var url = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=';
url += search_term;

$.ajax({
	url: url,
	method: 'GET',
	dataType: 'jsonp',
	contentType: "application/json; charset-utf-8",
	async: false,
}).done(function(response) {
	var theTypeIs = Object.keys(response.query.pages)[0];
	console.log(response.query.pages[theTypeIs].extract);	
})