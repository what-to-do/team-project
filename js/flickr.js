function getty_images(){
    var flickr_url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&text=dog&content_type=1&safe_search=1&sort=relevance&&extras=url_o&format=json&nojsoncallback=?";
    var api_key = "&api_key=5fe01295efad5e61547cd49f8d37f223";
    $("#main-display").empty();
    $.ajax({url: flickr_url + api_key,
            method: 'GET',
            /*datatype: "JSON",
            data: {
            success:function(data){},
            error:function(message){}
            }*/
            /*method: "flickr.photos.search"*/})
            .done(function(response) {
                console.log(flickr_url + api_key);
                console.log(response);
                console.log(response.photos.photo[0])
                    for(var i = 0; i <=10; i++) {
                        var img = $("<img>")
                        var farm_id = response.photos.photo[i].farm;
                        var server_id = response.photos.photo[i].server;
                        var id = response.photos.photo[i].id;
                        var secret_id = response.photos.photo[i].secret;
                        var full_img_url = "https://farm" + farm_id + ".staticflickr.com/" + server_id + "/" + id + "_" + secret_id + ".jpg";

                        $(img).addClass("flicker-photos")
                        $(img).attr({
                                    "id": "flicker" + i,
                                    "src": full_img_url
                        })


                $("#main-display").append(img);
            }
            }) 

} 