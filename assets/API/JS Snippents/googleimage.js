var url = "https://www.googleapis.com/customsearch/v1?&cx=017612769462488902851%3Auasggoghxt4&key=";
var apikey_google = 'AIzaSyCjmwysp5xUbx_hRaAsed0YNw6M3cKpc0w';
url+=apikey_google;
url += '&q=' + "zebra"
$.ajax({
	url: url,
	method: 'GET',
	dataType: 'jsonp',
}).done(function(result) {
	var objResult = result;
	console.log(objResult);
})