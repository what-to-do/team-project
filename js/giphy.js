	function displayGifs() {
		//variables for giphy api key and url to be used in AJAX
		var apiKey = "dc6zaTOxFJmzC";
		var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + baton + "&limit=10&rating=pg&api_key=" + apiKey;
		

		$.ajax({url: giphyURL, method: 'GET'}).done(function(response) {
			//clear gifs from webpage
			$('#gifs').empty();

			//loop to create gifs on webpage when button clicked
			for(var i=0; i<10; i++) {
				var image = response.data[i].images.fixed_height_still.url;
				var animated = response.data[i].images.fixed_height.url;
				var gifImage = $('<img>');
				var gifWrapper = $('<div/>');
				
				//add class and attributes to be used in the on click event
				gifWrapper.addClass('gifWrapper');
				gifImage.addClass('gifs');
				gifWrapper.attr('id', "gifWrap" + [i])
				gifImage.attr({'src': image,
							   'data-still': image,
							   'data-animate': animated,
							   'data-state': 'still'});

				//append the div to gifs ID then append rating and gifImage to the div
				$('#gifs').append(gifWrapper);
				$('#gifWrap' + [i]).append(gifImage);	
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

		})
			
	};
