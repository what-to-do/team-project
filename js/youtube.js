function youtube () {
var key = "AIzaSyBrQuQ65KpeO3KvEZ6zdmU7psymimrU6Is";
var query_url = "https://www.googleapis.com/youtube/v3/search?part=snippet%2Cid&q=" + baton +"&key=" + key ;

$.ajax({

    url: query_url,
    method: "GET"

}).done(function(response){

    //$.each(response.items , function(i, item){
    	//var output = getOutput();
    	//$("#main-display").append(output)
    //}); 


function getOutput(){
	for (i = 0; i < response.items.length; i++) {

	var video_ID = response.items[i].id.videoId;
	var title = response.items[i].snippet.title;
	var description = response.items[i].snippet.description;
	var thumb = response.items[i].snippet.thumbnails.high.url;
	var channel_title = response.items[i].snippet.channelTitle;
	var video_date = response.items[i].snippet.publishedAt;
	}

	console.log(title);
	//build output string

	var output = 
	'<li>' +
	'<div class = "list-left">' +
	'<img src ="' + thumb + '">' + 
	'</div>'
	'<div class = "list-right">' +
	'<h3>'  + title + '<h3></div>'
	'<small> By <span class="cTitle">' + channel_title+ '</span> on' + video_date + '</small>' + '<p>' + description + '</p>' +
	'</div>' + '</li>' + '<div class="clearfix"></div>'
	console.log(output); 
	$(output).appendTo(".display");

}

getOutput()



}); // End of Ajax Request / Done Function










}; // End of Document Ready Function