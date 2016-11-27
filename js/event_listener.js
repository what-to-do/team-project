
var baton = "";

var possible_categories = [];

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

		$("#user-input").append("");
		
		console.log("The baton is " + baton);
		
		/*$("#main-display").append("<br>" + "Mag click " + baton);*/

		//valid()

		ajax();

	

		search_history_add(baton, search_history_record);

	}); // End of mag-glass click event

	//if user presses enter on search input
	$("#user-input").keydown(function(event){
		
		if(event.keyCode == 13) {
			baton = $("#user-input").val().trim();
			/*user_search.push(user_input);*/
			console.log("The baton is: " + baton);

			/*$("#main-display").append("<br>" + "By enter: " + baton);*/

			//valid();
			
			expand_category_box();
		
			ajax();



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



    $(".past_searches").on("click", function() {

        var past_searches_click = $(this);

        var past_searches_pick = past_searches_click.data("index");

        console.log(past_searches_pick);

        baton = past_searches_pick;

        console.log('The baton is ' + baton);

        $("#main-display").append("<br>" + "By past searches: " + baton);

       // event_listener();

    }); // End of past_searches click event

    $("#mode").change(function(){
    	if ($(this).prop('checked')) {
    		$('body').addClass('dark-mode');
    		$('#main-display').addClass('dark-mode');
    		$('.container-fluid').css('background-color', '#263238');
    		$('.category_buttons').css('background-color', '#263238');
    		$('.display_user_word').css('color', '#fafafa');

    	}
    	else {
    		$('body').removeClass('dark-mode');
    		$('#main-display').removeClass('dark-mode')
    		$('.container-fluid').css('background-color', '#fafafa');
    		$('.category_buttons').css('background-color', '#fafafa');
    		$('.display_user_word').css('color', 'black');
    	}
    }); //end of toggle switch 

} // End of event_listener function

