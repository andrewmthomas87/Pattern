
document.addEventListener('deviceready', function() {
	alert('Device ready');
	var width = min($(window).width(), $(window).height());
	$('section').css('width', width);
	$('section').css('height', width);
	$('section').show('fast');
	alert('Debug');
}, false);
