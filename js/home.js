
$(document).ready(function() {
	var width = min($(window).width(), $(window).height());
	$('section').css('width', width);
	$('section').css('height', width);
});

document.addEventListener('deviceready', function() {

}, false);
