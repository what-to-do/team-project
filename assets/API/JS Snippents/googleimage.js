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
	var x = objResult.items[0].formattedUrl;
	console.log(x);
	x = x.split(".");
	console.log(x);
	var y = x.pop();
	console.log(x);
	y = x.pop();
	console.log(y);
	y = y.split("/");
	console.log(y);
	y = y.pop();
	console.log(y);
	y = "http://www.gstatic.com/hostedimg/" + y + "_large";
	console.log(y);
	var z = $("<img>");
	$(z).attr("src", y);

	$("div#content").append(z);
})