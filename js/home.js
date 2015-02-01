
document.addEventListener('deviceready', function() {
	var width = min($(window).width(), $(window).height());
	$('section').css('width', width);
	$('section').css('height', width);
	$('section').show('fast');
}, false);
