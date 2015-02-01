
function resize() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	if (windowWidth > windowHeight) {
		$('section').css({
			'width': 'calc(' + windowHeight + 'px - 25%)',
			'height': 'calc(' + windowHeight + 'px - 25%)',
			'padding': '12.5% 0',
			'margin-top': ''
		});
	}
	else {
		$('section').css({
			'width': 'calc(' + windowWidth + 'px - 25%)',
			'height': 'calc(' + windowWidth + 'px - 25%)',
			'padding': '0 12.5%',
			'margin-top': ((windowHeight - windowWidth) / 2) + 'px'
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
