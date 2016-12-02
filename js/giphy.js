	// variable for the number of gifs giphy will search for
	var search_num_giphy = "24";

function giphy() {

	// giphy api key
	var apiKey = "dc6zaTOxFJmzC";

	// giphy url for ajax
	var giphy_URL = "https://api.giphy.com/v1/gifs/search?q=" + baton + "&limit=" + search_num_giphy + "&rating=pg&api_key=" + apiKey;
	
	// ajax call for giphy
	$.ajax({url: giphy_URL, 
		   method: 'GET'})
		  .done(function(response) {
		
		// clear gifs from webpage
		$("#main-display").empty();
	
		// loop to create gifs on webpage when button clicked
		for(var i=0; i<response.data.length; i++) {
			
			// variable for still image
			var image = response.data[i].images.fixed_height_still.url;

			// variable for animated gif
			var animated = response.data[i].images.fixed_height.url;
			
			// variables to hold image and did jquery objects
			var gif_wrapper = $('<div/>');
			var gif_image = $('<img>');
			
			
			// add class and attributes to div
			gif_wrapper.addClass('gif-wrapper');
			gif_wrapper.attr('id', "gif_wrap" + [i])

			// add attribtes to gif to be used for animated and still
			gif_image.addClass('gifs img-responsive center-block');
			gif_image.attr({'src': image,
						   'data-still': image,
						   'data-animate': animated,
						   'data-state': 'still'});

			
			// add CSS if night-mode toggle switch is on
			if ($("#mode").prop('checked')) {

                $('.paging-button').css('background-color', '#263238');

                $('.paging-button').css('color', '#fafafa');

            } else {
                $('.paging-button').css('background-color', '#fafafa'); 

                $('.paging-button').css('color', '#263238');

            }; // end of css style

			
			// append the div to #main-display
			$('#main-display').append(gif_wrapper);

			// append the gif to the div
			$('#gif_wrap' + [i]).append(gif_image);	

		} // End of For Loop I
		
		// on click event for all gifs
		$('.gifs').on('click', function() {
			
			//variable to get the attribute of the data-state from the gif the user clicked
			var state = $(this).attr('data-state');

			if ( state == 'still'){
				//adds animated response from giphy api that's held in the animate variable
				$(this).attr('src', $(this).data('animate'));

				//changes the gif data-state attribute to animate
				$(this).attr('data-state', 'animate');
			}
			else {
				//adds still image response from giphy api that's held in the still variable
				$(this).attr('src', $(this).data('still'));

				//changes the gif data-state to still
				$(this).attr('data-state', 'still');
			}
		})


		//append search more button after photo gallery
            var button_div = $("<div>")

            var more_button = $("<button>");

            more_button.addClass("paging-button");

            more_button.attr({"id": "search-more-giphy", });

            more_button.text("Show more")
            
            //add CSS if night-mode toggle switch is on
            if ($("#mode").prop('checked')) {

                $('.paging-button').css('background-color', '#263238');

                $('.paging-button').css('color', '#fafafa');

            } else {
                $('.paging-button').css('background-color', '#fafafa'); 

                $('.paging-button').css('color', '#263238');

            }; // end of css style

            $("#main-display").append(button_div);

            $(button_div).append(more_button);
            
            // on click function for search more button to display 12 more photos
            $("#search-more-giphy").on("click", function(){

            // search_num from a string to number multiplied by 2
            var string_to_num = parseInt(search_num_giphy) + 24;

            // revert search_num back to a string
            search_num_giphy = string_to_num.toString();
            
            // call the flickr() function to search for more photos
            giphy();
            
            }) // end of search more click function
	})
		
}; //end of giphy()
