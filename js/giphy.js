	var search_num_giphy = "24";

	function giphy() {
		//variables for giphy api key and url to be used in AJAX
		var apiKey = "dc6zaTOxFJmzC";
		var giphy_URL = "https://api.giphy.com/v1/gifs/search?q=" + baton + "&limit=" + search_num_giphy + "&rating=pg&api_key=" + apiKey;
		
		

		$.ajax({url: giphy_URL, 
			   method: 'GET'})
			  .done(function(response) {
			//clear gifs from webpage
			$("#main-display").empty();
		
			//loop to create gifs on webpage when button clicked
			for(var i=0; i<response.data.length; i++) {
				var image = response.data[i].images.fixed_height_still.url;
				var animated = response.data[i].images.fixed_height.url;
				var gif_image = $('<img>');
				var gif_wrapper = $('<div/>');
				
				//add class and attributes to be used in the on click event
				gif_wrapper.addClass('gif-wrapper');
				gif_image.addClass('gifs');
				gif_wrapper.attr('id', "gif_wrap" + [i])
				gif_image.attr({'src': image,
							   'data-still': image,
							   'data-animate': animated,
							   'data-state': 'still'});

				//append the div to gifs ID then append rating and gif_image to the div
				$('#main-display').append(gif_wrapper);
				$('#gif_wrap' + [i]).append(gif_image);	
			}
			
			//on click to change gif from still to animate and back
			$('.gifs').on('click', function() {
				var state = $(this).attr('data-state');

				if ( state == 'still'){
					$(this).attr('src', $(this).data('animate'));
					$(this).attr('data-state', 'animate');
				}
				else {
					$(this).attr('src', $(this).data('still'));
					$(this).attr('data-state', 'still');
				}
			})
			//append search more button after photo gallery
                $("#main-display").append('<button id="search-more-giphy">show more</button>');
                //on click function for search more button to display 12 more photos
                $("#search-more-giphy").on("click", function(){
                //search_num from a string to number multiplied by 2
                var string_to_num = parseInt(search_num_giphy) * 2;
                //revert search_num back to a string
                search_num_giphy = string_to_num.toString();
                console.log(search_num_giphy);
                //call the flickr() function to search for more photos
                giphy();
                }) //end of search more click function
		})
			
	}; //end of giphy()
