$(document).ready(function() {
	$("a").click(function() {
		$(this).css("background-color", "yellow");
	});

	$("h2.title").click(function() {
		$(this).hide();
	});	

});