
var baton = "";

function event_listener(){

	//Tooltips Initialization
	/*$(function () {
	 $('[data-toggle="tooltip"]').tooltip()
	});*/
var num = 1
	//when user clicks on help button
	$("#help-button").on("click", function(){
		num++
		if(num % 2 ==0){	
			$('.rick').tooltip();

			console.log(num + " is even");
		}
		//if user click =true activate hover function until click false
		////Tooltips Initialization
		else{
			$('.rick').attr({
				"data-toggle": ""
			})	
		
		console.log(num + " is odd");
	}
	});

	$("#mag-glass").on("click" , function(){

		baton = $("#user-input").val().trim();
		
		console.log("The baton is " + baton);
		
		/*$("#main-display").append("<br>" + "Mag click " + baton);*/

		valid()

		expand_category_box(baton)

		search_history_add(baton, search_history_record);

	}); // End of mag-glass click event

	//if user presses enter on search input
	$("#user-input").keydown(function(event){
		
		if(event.keyCode == 13) {
			baton = $("#user-input").val().trim();
			/*user_search.push(user_input);*/
			console.log("The baton is: " + baton);

			/*$("#main-display").append("<br>" + "By enter: " + baton);*/

			valid();

			expand_category_box()
			search_history_add(baton, search_history_record);

			return false;
		}
	}); // End of user-input keydown event
	
	$(".searching").on("click" , function(){

		var user_click = $(this);
		var user_pick = user_click.data("index");

		console.log("User click is " + user_click);
		console.log("User pick is " + user_pick);

		if (user_pick == "synonyms") {

			synonyms();

		}  else if (user_pick == "past") {

			search_history();
			
		} // End of If Else

	}); // End of searching click event


 $(".category_buttons").on("click", function() {
        var user_category_click = $(this);
        var user_category_pick = user_category_click.data("name");
        console.log(user_category_click);
        console.log(user_category_pick);
        if (user_category_pick == "dictionary") {

            dictionary();

        } else if (user_category_pick == "wikipedia") {

            wikipedia();

        } else if (user_category_pick == "youtube") {

            youtube();

        } else if (user_category_pick == "giphy") {
        	
            giphy();

        } else if (user_category_pick == "flickr") {
        	
            flickr();

        }// End of If Else

    }); // End of category_buttons click event

    $(".past_searches").on("click", function() {

        var past_searches_click = $(this);

        var past_searches_pick = past_searches_click.data("index");

        console.log(past_searches_pick);

        baton = past_searches_pick;

        console.log('The baton is ' + baton);

        $("#main-display").append("<br>" + "By past searches: " + baton);

       // event_listener();

    }); // End of past_searches click event


    $(".related").on("click", function() {

        console.log("synonym click");

        var synonym_click = $(this);

        var synonym_pick = synonym_click.data("index");

        console.log("Synonym pick is " + synonym_pick);

        baton = synonym_pick;

        console.log('The baton is ' + baton);

       updated_category_box();

        //event_listener();


    }); // End of synonyms click event

} // End of event_listener function

