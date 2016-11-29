var search_num = "12"
function flickr(){
    
    var api_key = "5fe01295efad5e61547cd49f8d37f223";
    var flickr_url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&text=" + baton + "&per_page=" + search_num + "&content_type=1&safe_search=1&sort=relevance&&extras=url_o&format=json&nojsoncallback=?&api_key=" + api_key;
    
    //empty main display 
    $("#main-display").empty();
    console.log(flickr_url);
    //ajax call for flickr
    $.ajax({url:    flickr_url,
            method: 'GET'})
            .done(function(response) {
                //for loop to create 10 images
                for(var i = 0; i < response.photos.photo.length; i++) {
                    //variables to set up img tag and full url address
                    var a = $("<a>")
                    var img = $("<img>")
                    var farm_id = response.photos.photo[i].farm;
                    var server_id = response.photos.photo[i].server;
                    var id = response.photos.photo[i].id;
                    var secret_id = response.photos.photo[i].secret;
                    var small_img_url = "https://farm" + farm_id + ".staticflickr.com/" + server_id + "/" + id + "_" + secret_id + "_m.jpg";
                    var big_img_url = "https://farm" + farm_id + ".staticflickr.com/" + server_id + "/" + id + "_" + secret_id + "_b.jpg";
                    //edit photos with class .flicker-photos

                    $(a).addClass("fancybox")
                    $(a).attr({"id": "big-flickr-photo" + i,
                                "data-fancybox-group": "gallery",
                                "href": big_img_url});

                    $(img).addClass("flickr-photos")
                    $(img).attr({
                                "id": "flickr" + i,
                                "src": small_img_url,
                                "alt": " "
                    })
                //append images to the main display
                $("#main-display").append(a);
                $("#big-flickr-photo" + i).append(img);
                $('.fancybox').fancybox();

                }   
                //append search more button after photo gallery
                $("#main-display").append('<button class="paging-button" id="search-more-flickr">show more</button>');
                //on click function for search more button to display 12 more photos
                $("#search-more-flickr").on("click", function(){
                //search_num from a string to number multiplied by 2
                var string_to_num = parseInt(search_num) * 2;
                //revert search_num back to a string
                search_num = string_to_num.toString();
                //call the flickr() function to search for more photos
                flickr();
                }) //end of search more click function
            }) 
            

} //end of flickr()







