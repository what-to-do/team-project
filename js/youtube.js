function youtube() {
var key = "AIzaSyBrQuQ65KpeO3KvEZ6zdmU7psymimrU6Is";
var query_url = "https://www.googleapis.com/youtube/v3/search?part=snippet%2Cid&q=" + baton +"&key=" + key ;
//empty main display 
$("#main-display").empty();

$.ajax({

    url: query_url,
    method: "GET"

}).done(function(response){
	//for loop to gather data;
	for (var i = 0; i < response.items.length; i++) {

	var video_ID = response.items[i].id.videoId;
	var title = response.items[i].snippet.title;
	var description = response.items[i].snippet.description;
	var thumb = response.items[i].snippet.thumbnails.high.url;
	var channel_title = response.items[i].snippet.channelTitle;
	var video_date = response.items[i].snippet.publishedAt;
	
	//build output string
	var output = 
	'<li class = "results">' +
	'<div class = "list-left">' +
	'<img src ="' + thumb + '">' + 
	'</div>' +
	'<div class = "list-right">' +
	'<h3><a href="http://www.youtube.com/embed/' + video_ID +'"class="fancybox fancybox.iframe">'  + title + '</a></h3>' +
	'<small> By <span class="cTitle">' + channel_title+ '</span> on' + video_date + '</small>' + '<p>' + description + '</p>' +
	'</div>' + '</li>' + '<div class="clearfix"></div>' +
	'';
	$(output).appendTo("#main-display");

	}; //end of for loop  

	var next_page = response.nextPageToken;
	var prev_page = response.prevPageToken;
	
	var nextBtn =  $("<button id='next_button'>")
		nextBtn.addClass("paging-button")
		nextBtn.text("Next");
		nextBtn.attr({
			"token" : next_page,
			"query" : baton,
		})

	var prevBtn =  $("<button id='next_button'>")
		prevBtn.addClass("paging-button")
		prevBtn.text("Previous");
		prevBtn.attr({
			"token" : prev_page,
			"query" : baton,
		})
	
			//'onclick="nextPage();">Next Page</button>'
	$(nextBtn).appendTo(".display");
	$(prevBtn).appendTo(".display");


	// function getButtons(prev_page, next_page) {
	// 	if(prev_page == false) {

	// 	} else {
	// 		var btnOutput = '<div class = "button-container">' +
	// 		'onclick="prevPage();">Previous Page</button></div>'
	// 		'<button id="next_button" class="paging-button" data-token="' + next_page + '"' +
	// 		'onclick="nextPage();">Next Page</button></div>'
	// 	}
	// }

}); // End of Ajax Request / Done Function
}; // End of youtube Function
