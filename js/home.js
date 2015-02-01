
function resize() {
	var windowWidth = $(window).width();
	$('section').css({
		'height': windowWidth + 'px',
		'padding-top': (($(window).height() - windowWidth) / 2) + 'px'
	});
	$('img#play').css('left', (($(window).width() - $('img#play').width()) / 2) + 'px');
}

$(window).resize(resize);
$(document).ready(resize);


var pattern = [1, 2, 3, 4, 3, 2, 1];

document.addEventListener('deviceready', function() {
	$('img#play').click(function() {
		$(this).fadeOut('fast');
		setTimeout(function() {
			$('div#overlay').fadeOut('fast');
			setTimeout(updatePattern, 500);
		}, 500);
	});
	setTimeout(function() {
		$('img#play').fadeIn('fast');
	}, 500);
}, false);

function updatePattern() {
	pattern[pattern.length] = Math.floor(Math.random() * 4) + 1;
	$('h1').html('Watch');
	$('h1').fadeIn('fast');
	for (i = 0; i < pattern.length; i++) {
		setTimeout(function(n) {
			$('section div:nth-child(' + n + ') div').addClass('active');
		}, i * 2000 + 1000, pattern[i]);
		setTimeout(function(n) {
			$('section div:nth-child(' + n + ') div').removeClass('active');
		}, (i + 1) * 2000, pattern[i]);
	}
}
