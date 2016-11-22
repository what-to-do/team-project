

function getty_images(){
    var flickr_url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&text=dog&content_type=1&safe_search=1&sort=relevance&format=json";
    var api_key = "&api_key=5fe01295efad5e61547cd49f8d37f223";
    console.log(flickr_url + api_key);
    $("#main-display").empty();
    $.ajax({url:     flickr_url + api_key,
            method: 'GET',
            datatype: "JSON",
            data: {
            success:function(data){},
            error:function(message){}
            }
            /*method: "flickr.photos.search"*/})
            .done(function(response) {
                console.log(response);
                $("#main-display").append("<object src=https://www.flickr.com/photos/58130019@N08/5340131446>")
            }) 

} 
        





/*(function(){
    jQuery('#a-link').remove();   
    
    jQuery('<img alt="" />').attr('id', 'loader').attr('src', 'ajax-loader.gif').appendTo('#image-container');
    
    //assign your api key equal to a variable
    var apiKey = '[YOUR API KEY]';
    
    //the initial json request to flickr
    //to get your latest public photos, use this request: http://api.flickr.com/services/rest/?&amp;method=flickr.people.getPublicPhotos&amp;api_key=' + apiKey + '&amp;user_id=29096781@N02&amp;per_page=15&amp;page=2&amp;format=json&amp;jsoncallback=?
    $.getJSON('https://api.flickr.com/services/rest/?&amp;method=flickr.photosets.getPhotos&amp;api_key=' + apiKey + '&amp;photoset_id=72157619415192530&amp;format=json&amp;jsoncallback=?',


*/

