
function resize() {
	$('section').css({
		'height': $(window).width() + 'px',
		'padding-top': (($(window).height() - $('section').height()) / 2) + 'px'
	});
	$('img#play').css('left', (($(window).width() - $('img#play').width()) / 2) + 'px');
}

$(window).resize(resize);
$(document).ready(resize);


var tileSelected = true;

document.addEventListener('deviceready', function() {
	$('img#play').click(function() {
		$(this).fadeOut('fast');
		setTimeout(function() {
			$('div#overlay').fadeOut('fast');
			$('section').fadeIn('fast');
			setInterval(selectRandomTile, 1000);
		}, 500);
	});
	$('section div div').click(function() {
		$(this).toggleClass('active');
	});
	setTimeout(function() {
		$('img#play').fadeIn('fast');
	}, 500);
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
