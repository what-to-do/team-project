function google_image(){

var url = "https://www.googleapis.com/customsearch/v1?&cx=017612769462488902851%3Auasggoghxt4&key=";
var apikey_google = 'AIzaSyCjmwysp5xUbx_hRaAsed0YNw6M3cKpc0w';
url+=apikey_google;
url += '&q=' + "zebra"
$.ajax({
	url: url,
	method: 'GET',
	dataType: 'jsonp',
}).done(function(result) {
	console.log(result);
	console.log(url);
	console.log(result.items[0].link);


	$('#main-display').empty();
	
	var img = $("<img>")
	
	img.attr({
			   "src":    result.items[0].htmlFormattedUrl
	}) 
	
	$('#main-display').append(img);
})

}