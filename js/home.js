
function resize() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	if (windowWidth > windowHeight) {
		$('section').css({
			'width': (0.875 * windowHeight) + 'px',
			'height': (0.875 * windowHeight) + 'px',
			'padding': '6.25% 0',
			'margin-top': ''
		});
	}
	else {
		$('section').css({
			'width': (0.875 * windowWidth) + 'px',
			'height': (0.875 * windowWidth) + 'px',
			'padding': '0 6.25%',
			'margin-top': ((windowHeight - windowWidth) / 2) + 'px'
		});
	}
	$('img#play').css('left', (($(window).width() - $('img#play').width()) / 2) + 'px');
}

$(window).resize(resize);
$(document).ready(resize);


var tileSelected = false;

document.addEventListener('deviceready', function() {
	$('img#play').fadeIn('fast');
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
	setInterval(selectRandomTile, 750);
}, false);

function selectRandomTile() {
	if (tileSelected) {
		$('section div div.active').removeClass('active');
	}
	else {
		$('section div:nth-child(' + (Math.floor(Math.random() * 4) + 1) + ') div').addClass('active');
	}
	tileSelected = !tileSelected;
}
