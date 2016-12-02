
function wikiajax(query) {

	console.log('call wikiajax');

	var url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&indexpageids=1&iwurl=1&redirects=1&converttitles=1&exlimit=max&utf8=1&titles=';
	
	var queryString = query;
	
	url += queryString;
	
	$.ajax({
		url: url,
		method: 'GET',
		dataType: 'jsonp',
		contentType: "application/json; charset-utf-8",
		async: false,
	}).done(function(result) {
		
		var objResult = result;
		
		console.log(objResult);
		
		$.each(result.query.pages, function(c) {
			
			var hey = result.query.pages[c].extract;
		
			$("#main-display").html(hey);
		
		});
	
	});

}	// end of function wikiajax

function wikipedia() {

	wikiajax(baton);

}
