
/*https://api.gettyimages.com/v3/search/images?ids=<asset id>,<asset id>*/

/*function getty_images(){
var getty_url = "https://api.gettyimages.com/v3/search/images?phrase=zebra&key=g3vdr3ns4xp6g2psweh6zc9y";
var api_key =  "g3vdr3ns4xp6g2psweh6zc9y"
		$.ajax({url: getty_url, 
			   method: 'GET'})
			  .done(function(response) {
			  	console.log(response);

			  })
}*/

/*function getty_images() {
$.ajax({ 
    url: 'https://api.imgur.com/3/image',
    headers: {
        'Authorization': 'Client-IDac560bb4069f8f4'
    },
    type: 'POST',
    data: {
        'image': 'helloworld.jpg'
    },
    success: function(result) { 
    	console.log(result); }
});

}*/
function getty_images(){
var clientId = "ac560bb4069f8f4";
var imgUrl = "https://api.imgur.com/3/image";

$.ajax({
    url: "https://api.imgur.com/3/image",
    type: "POST",
    datatype: "json",
    data: {image: imgUrl},
    success: showMe,
    error: showMe,
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Client-ID " + clientId);
    }
});

function showMe(data) {
   	console.log(data);

    if(data.success == true) {
        $("#main-display").append("<img src='"+data.data.link+"'/>");
    }
}
}





