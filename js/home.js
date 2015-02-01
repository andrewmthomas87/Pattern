
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
	$('img#play').css('left', (($(window).width() - $('img#play').width()) / 2) + 'px');
}

$(window).resize(resize);
$(document).ready(resize);


$(document).ready(function() {
	$('img#play').click(function() {
		$(this).fadeOut('fast');
		setTimeout(function() {
			$('div#overlay').fadeOut('fast');
			$('section').fadeIn('fast');
		}, 500);
	});
	$('section div div').click(function() {
		$(this).toggleClass('active');
	});
});

document.addEventListener('deviceready', function() {

}, false);
