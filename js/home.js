
function resize() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	if (windowWidth > windowHeight) {
		$('section').css({
			'width': windowHeight,
			'height': windowHeight,
			'padding': ''
		});
	}
	else {
		$('section').css({
			'width': windowWidth,
			'height': windowWidth,
			'padding': ((windowHeight - windowWidth) / 2) + 'px 0'
		});
	}
}

$(window).resize(resize);
$(document).ready(resize);


$(document).ready(function() {
	$('img#play').click(function() {
		$(this).fadeOut('fast');
		setTimeout(function() {
			$('div#overlay').fadeOut('fast');
		}, 500);
	});
});

document.addEventListener('deviceready', function() {
	setTimeout(function() {
		$('section').fadeIn('fast');
	}, 1000);
}, false);
