
document.addEventListener('deviceready', function() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	if (windowWidth > windowHeight) {
		$('section').css({
			'width': windowHeight,
			'height': windowWidth,
			'margin': '0 auto'
		});
	}
	else {
		$('section').css({
			'width': windowWidth,
			'height': windowHeight,
			'margin': ((windowHeight - windowWidth) / 2) + 'px 0'
		});
	}
	setTimeout(function() {
		$('section').show('slow');
	}, 2500);
}, false);
