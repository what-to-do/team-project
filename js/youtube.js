//global variable needed
var pageToken = "";

function youtube() {
	
var key = "AIzaSyBrQuQ65KpeO3KvEZ6zdmU7psymimrU6Is";

var query_url = "https://www.googleapis.com/youtube/v3/search?part=snippet%2Cid&q=" + baton + "&type=video&videoSyndicated=true&pageToken=" + pageToken + "&maxResults=5&key=" + key;

// empty main display 
// 
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
	'<a href="http://www.youtube.com/embed/' + video_ID +'"class="fancybox fancybox.iframe"><img src ="' + thumb + '"></a>' + 
	'</div>' +
	'<div class = "list-right">' +
	'<h3><a href="http://www.youtube.com/embed/' + video_ID +'"class="fancybox fancybox.iframe">'  + title + '</a></h3>' +
	'<small> By <span class="cTitle">' + channel_title+ '</span> on' + video_date + '</small>' + '<p>' + description + '</p>' +
	'</div>' + '</li>' + '<div class="clearfix"></div>' +
	'';
	$(output).appendTo("#main-display");

	$(".fancybox").fancybox();

	}; //end of for loop  

	var next_page = response.nextPageToken;

	var prev_page = response.prevPageToken;
	
	var nextBtn =  $("<button id='next_button'>");

	nextBtn.addClass("paging-button");

	nextBtn.text("Next");

	var prevBtn =  $("<button id='prev_button'>");

	prevBtn.addClass("paging-button");

	prevBtn.text("Previous");

	$(nextBtn).css("float", "right");

	$(prevBtn).css("float", "left");

	$(nextBtn).appendTo(".display");

	$(prevBtn).appendTo(".display");

	if ($("#mode").prop('checked')) {

		$('.paging-button').css('background-color', '#263238');

		$('.paging-button').css('color', '#fafafa');

    } else {

    	$('.paging-button').css('background-color', '#fafafa');

		$('.paging-button').css('color', '#263238');

    }; //end of css style

	// only display next and previous buttons if they are needed.
	if (typeof response.prevPageToken === "undefined") {

	 	$("#prev_button").hide();

	 	} else {

	 	$("#prev_button").show();

	 	}
	 if (typeof response.nextPageToken === "undefined") {

	 	$("#next_button").hide();

	 	} else {

	 	$("#next_button").show();

	 	}

	 $("#next_button").on("click", function(){

	 	pageToken = next_page;

	 	query_url = "https://www.googleapis.com/youtube/v3/search?part=snippet%2Cid&q=" + baton + "&type=video&videoSyndicated=true&pageToken=" + pageToken + "&maxResults=5&key=" + key;
	 	
	 	youtube();

		}); //end of "next button" onclick event

	 $("#prev_button").on("click", function(){

	 	pageToken = prev_page;
	 	
	 	query_url = "https://www.googleapis.com/youtube/v3/search?part=snippet%2Cid&q=" + baton + "&type=video&videoSyndicated=true&pageToken=" + pageToken + "&maxResults=5&key=" + key;
	 	
	 	youtube();//end of "prev button" onclick event	 	
	 });
}); // End of Ajax Request / Done Function
}; // End of youtube Function
















