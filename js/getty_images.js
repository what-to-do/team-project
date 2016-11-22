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
                $("#main-display").append("<img src=https://farm5.staticflickr.com/4131/4846208207_eb7d525741.jpg>")
            }) 

} 