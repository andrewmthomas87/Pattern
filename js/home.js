
function resize() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	if (windowWidth > windowHeight) {
		$('section').css({
			'width': windowHeight,
			'height': windowHeight,
			'margin': '0 auto'
		});
	}
	else {
		$('section').css({
			'width': windowWidth,
			'height': windowWidth,
			'margin': ((windowHeight - windowWidth) / 2) + 'px 0'
		});
	}
}

$(window).resize(resize);

$(document).ready(resize);

document.addEventListener('deviceready', function() {
	setTimeout(function() {
		$('section').fadeIn('fast');
	}, 1000);
}, false);
