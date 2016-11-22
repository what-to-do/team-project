function flickr(){
    var flickr_url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&text=" + baton + "&content_type=1&safe_search=1&sort=relevance&&extras=url_o&format=json&nojsoncallback=?&api_key=";
    var api_key = "5fe01295efad5e61547cd49f8d37f223";
    //empty main display 
    $("#main-display").empty();
    
    //ajax call for flickr
    $.ajax({url:    flickr_url + api_key,
            method: 'GET'})
            .done(function(response) {
                //for loop to create 10 images
                for(var i = 0; i <=10; i++) {
                    //variables to set up img tag and full url address
                    var img = $("<img>")
                    var farm_id = response.photos.photo[i].farm;
                    var server_id = response.photos.photo[i].server;
                    var id = response.photos.photo[i].id;
                    var secret_id = response.photos.photo[i].secret;
                    var full_img_url = "https://farm" + farm_id + ".staticflickr.com/" + server_id + "/" + id + "_" + secret_id + ".jpg";
                    //edit photos with class .flicker-photos
                    $(img).addClass("flicker-photos")
                    $(img).attr({
                                "id": "flicker" + i,
                                "src": full_img_url
                    })
                //append images to the main display
                $("#main-display").append(img);
            }
            }) 

} //end of flickr()