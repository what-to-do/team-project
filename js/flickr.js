//amount of images requested from ajax call
var search_num = "15"

//function to run ajax call, create images and append them to the #main-display
function flickr(){
    
    //flickr api key
    var api_key = "5fe01295efad5e61547cd49f8d37f223";

    //flickr url for ajax call
    var flickr_url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&text=" + baton + "&per_page=" + search_num + "&content_type=1&safe_search=1&sort=relevance&&extras=url_o&format=json&nojsoncallback=?&api_key=" + api_key;
    
    //empty main display 
    $("#main-display").empty();

    //ajax call for flickr
    $.ajax({url:    flickr_url,
            method: 'GET'})
            .done(function(response) {

                //for loop to create 10 images
                for(var i = 0; i < response.photos.photo.length; i++) {
                    
                    //variables to set up big and small url addresses for image and a tag
                    var $a = $("<a>");
                    var $img = $("<img>");
                    var farm_id = response.photos.photo[i].farm;
                    var server_id = response.photos.photo[i].server;
                    var id = response.photos.photo[i].id;
                    var secret_id = response.photos.photo[i].secret;
                    
                    //urls set up for small(thumbnail) and big images 
                    var small_img_url = "https://farm" + farm_id + ".staticflickr.com/" + server_id + "/" + id + "_" + secret_id + "_m.jpg";
                    var big_img_url = "https://farm" + farm_id + ".staticflickr.com/" + server_id + "/" + id + "_" + secret_id + "_c.jpg";
                    
                    //adding class of fancybox  to <a> for gallery plugin
                    $($a).addClass("fancybox");
                    
                    //adding href of the big image for when the image is clicked on
                    $($a).attr({ 
                                "id": "big-flickr-photo" + i,
                                "data-fancybox-group": "gallery",
                                "href": big_img_url
                            });

                    //Add CSS using .flickr-photos for photos
                    $($img).addClass("flickr-photos");

                    //add src of the small url to display images in the gallery
                    $($img).attr({
                                "id": "flickr" + i,
                                "src": small_img_url,
                                "alt": " "
                    });

                //append <a> to the main display
                $("#main-display").append($a);

                //append images to <a>
                $("#big-flickr-photo" + i).append($img);

                //add fancybox and remove close button in top right corner
                $('.fancybox').fancybox({closeBtn: false});

                }   
                
                //append search more button after photo gallery
                var $div = $("<div>");
                var $button = $("<button>");

                    $button.addClass("paging-button");
                    $button.attr({"id": "search-more-flickr", });
                    $button.text("Show more")

                //add CSS if the dark-mode toggle switch is on
                if ($("#mode").prop('checked')) {
                    $('.paging-button').css('background-color', '#263238');
                    $('.paging-button').css('color', '#fafafa');
                } else {
                    $('.paging-button').css('background-color', '#fafafa'); 
                    $('.paging-button').css('color', '#263238');
                }; //end of css style

                $("#main-display").append($div);
                $($div).append($button);

                //on click function for search more button to display 15 more photos
                $("#search-more-flickr").on("click", function(){

                //search_num from a string to number then add 15
                var string_to_num = parseInt(search_num) + 15;

                //revert search_num back to a string
                search_num = string_to_num.toString();

                //call the flickr() function to search for more photos
                flickr();

                }) //end of search more click function
            }) 

        }//end of flickr()







