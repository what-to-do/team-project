function welcome_splash() {

	$("#main-display").append("<br><br><br>");

	var welcome1 = $("<h1>");

	$(welcome1).html("Welcome to Pipeline!");

	$(welcome1).css("text-align", "center");

	$("#main-display").append(welcome1);

	var welcome2 = $("<h3>").html("It's time to explore the Internet!");

	$(welcome2).css("text-align", "center");

	$("#main-display").append(welcome2);	

	var welcome_list = $("<ul>");

	$(welcome_list).css("text-align", "center");

	$(welcome_list).append("<li>Enter a word in the upper right box. <i class='fa fa-level-up' aria-hidden='true'></i></li>");
	
	$(welcome_list).append("<li>Click one of the buttons that comes up.</li>");
	
	$(welcome_list).append("<li>Your results will show up in this screen.</li>");
	
	$(welcome_list).append("<li><i class='fa fa-long-arrow-left' aria-hidden='true'></i> Open your search history by clicking to the left.</li>");
	
	$("#main-display").append(welcome_list);

} // End of welcome splash function