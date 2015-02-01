
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
	$('section div div').click(function() {
		$(this).toggleClass('circle');
	});
});

document.addEventListener('deviceready', function() {
	setTimeout(function() {
		$('section').fadeIn('fast');
	}, 1000);
}, false);
