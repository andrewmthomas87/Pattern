
function resize() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	$('h1').css('top', ((windowHeight - windowWidth) / 4) + 'px');
	$('section').css({
		'height': windowWidth + 'px',
		'padding-top': ((windowHeight - windowWidth) / 2) + 'px'
	});
	$('img#play').css('left', ((windowWidth - $('img#play').width()) / 2) + 'px');
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
	$('h1').fadeIn('slow');
	for (i = 0; i < pattern.length; i++) {
		setTimeout(function(n) {
			$('section div:nth-child(' + n + ') div').addClass('active');
		}, (i + 2) * 750, pattern[i]);
		setTimeout(function(n) {
			$('section div:nth-child(' + n + ') div').removeClass('active');
		}, (i + 2) * 750 + 400, pattern[i]);
	}
	setTimeout(function() {
		$('h1').fadeOut('fast', function() {
			$('h1').html('Repeat');
			$('h1').fadeIn('fast');
		});
	}, (pattern.length + 4) * 750);
}
