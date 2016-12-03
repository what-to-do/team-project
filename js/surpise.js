function surpise () {

	$("#category-div").html();

	 var just = $("<div>");
	 var rick = $("<div>");
	 var jess = $("<div>");
	 var jeff = $("<div>");

	just.addClass("card col-xs-4 col-md-3 text-xs-center");
	rick.addClass("card col-xs-4 col-md-3 text-xs-center");
	jess.addClass("card col-xs-4 col-md-3 text-xs-center");
	jeff.addClass("card col-xs-4 col-md-3 text-xs-center");

	just.attr({
		"style": "margin-top:20;"
	});

	rick.attr({
		"style": "margin-top:20;"
	});

	jess.attr({
		"style": "margin-top:20;"
	});

	jeff.attr({
		"style": "margin-top:20;"
	});
	var justh3 = $("<h3>");
	var rickh3 = $("<h3>");
	var jessh3 = $("<h3>");
	var jeffh3 = $("<h3>");

	justh3.addClass("card-header primary-color white-text text-xl-center");
	rickh3.addClass("card-header blue-grey darken-3 white-text text-xl-center");
	jessh3.addClass("card-header secondary-color-dark white-text text-xl-center");
	jeffh3.addClass("card-header teal darken-3 white-text text-xl-center");

	 var justcd = $("<div>");
	 var rickcd = $("<div>");
	 var jesscd = $("<div>");
	 var jeffcd = $("<div>");

	justcd.addClass("card-block");
	rickcd.addClass("card-block");
	jesscd.addClass("card-block");
	jeffcd.addClass("card-block");

	var justh4 = $("<h4>");
	var rickh4 = $("<h4>");
	var jessh4 = $("<h4>");
	var jeffh4 = $("<h4>");

	justh4.addClass("text-xl-center");
	rickh4.addClass("text-xl-center");
	jessh4.addClass("text-xl-center");
	jeffh4.addClass("text-xl-center");


	var just_img = $("<img>");
	var rick_img = $("<img>");
	var jess_img = $("<img>");
	var jeff_img = $("<img>");

	var justa = $("<a>");
	var ricka = $("<a>");
	var jessa = $("<a>");
	var jeffa = $("<a>");

	var justi = $("<i>");
	var ricki = $("<i>");
	var jessi = $("<i>");
	var jeffi = $("<i>");

	justi.attr({
		"class": "fa fa-github",
		"aria-hidden": "true"
	});

	ricki.attr({
		"class": "fa fa-github",
		"aria-hidden": "true"
	});

	jessi.attr({
		"class": "fa fa-github",
		"aria-hidden": "true"
	});

	jeffi.attr({
		"class": "fa fa-github",
		"aria-hidden": "true"
	});

	justa.text("GitHub  ");
	ricka.text("GitHub  ");
	jessa.text("GitHub  ");
	jeffa.text("GitHub  ");

	justa.attr({
		"href": "https://github.com/justinbesteman",
		"target": "_blank",
		"class": "text-xs-center"
	});

	ricka.attr({
		"href": "https://github.com/rdotchin",
		"target": "_blank"
	});

	jessa.attr({
		"href": "https://github.com/jessicaprado",
		"target": "_blank"
	});

	jeffa.attr({
		"href": "https://github.com/jeffswearingen",
		"target": "_blank"
	});

	just_img.attr({
		"src": "assets/images/justin.jpg",
		"class": "rounded",
		"style": "width:300px;height:300px;margin-bottom:20px;"
	});

	rick_img.attr({
		"src": "assets/images/rick.png",
		"style": "width:300px;height:300px;margin-bottom:20px;",
		"class": "rounded"
	});

	jess_img.attr({
		"src": "assets/images/jess.jpg",
		"style": "width:300px;height:300px;margin-bottom:20px;",
		"class": "rounded"
	});

	jeff_img.attr({
		"src": "assets/images/jeff.jpg",
		"style": "width:300px;height:300px;margin-bottom:20px;",
		"class": "rounded"
	});

	$("#main-display").html("");

	$("#main-display").html(just);

	justh3.text("Justin Besteman");

	justh3.appendTo(just);

	justcd.appendTo(just);

	justh4.text("Team Lead");

	justh4.appendTo(justcd);

	just_img.appendTo(justcd);

	justa.appendTo(justcd);

	justi.appendTo(justcd);

	$("#main-display").append(rick);

	rickh3.text("Rick Dotchin");

	rickh3.appendTo(rick);

	rickcd.appendTo(rick);

	rickh4.text("Team Member");

	rickh4.appendTo(rickcd);

	rick_img.appendTo(rickcd);

	ricka.appendTo(rickcd);

	ricki.appendTo(rickcd);

	$("#main-display").append(jess);

	jessh3.text("Jessica Prado");

	jessh3.appendTo(jess);

	jesscd.appendTo(jess);

	jessh4.text("Team Member");

	jessh4.appendTo(jesscd);

	jess_img.appendTo(jesscd);

	jessa.appendTo(jesscd);

	jessi.appendTo(jesscd);

	$("#main-display").append(jeff);

	jeffh3.text("Jeff Swearingen");

	jeffh3.appendTo(jeff);

	jeffcd.appendTo(jeff);

	jeffh4.text("Team Member");

	jeffh4.appendTo(jeffcd);

	jeff_img.appendTo(jeffcd);

	jeffa.appendTo(jeffcd);

	jeffi.appendTo(jeffcd);

} // End of Surpise Function

