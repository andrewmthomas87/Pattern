
function resize() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	$('h1').css('top', ((windowHeight - windowWidth) / 4) + 'px');
	$('section').css({
		'height': windowWidth + 'px',
		'padding-top': (5 * (windowHeight - windowWidth) / 8) + 'px'
	});
	$('img#play').css('left', ((windowWidth - $('img#play').width()) / 2) + 'px');
}

$(window).resize(resize);
$(document).ready(resize);

var tones = [];

var pattern = [];

var playback = true;
var position = 0;
var activeTile = false;

var showingScore = false;

document.addEventListener('deviceready', function() {
	for (i = 0; i < 4; i++) {
		tones[i] = new Media('tone' + (i + 1) + '.wav');
		tones[i].setVolume(1);
	}
	$('img#play').click(function() {
		$(this).fadeOut('fast');
		setTimeout(function() {
			$('div#overlay').fadeOut('fast');
			setTimeout(updatePattern, 500);
		}, 500);
	});
	$('section div div').click(function() {
		if (!(playback || activeTile)) {
			if ($('section div div').index(this) + 1 == pattern[position]) {
				activeTile = true;
				position++;
				$(this).addClass('active');
				tones[pattern[position - 1] - 1].play();
				setTimeout(function() {
					$('section div:nth-child(' + pattern[position - 1] + ') div').removeClass('active');
					activeTile = false;
					if (position == pattern.length) {
						$('h1').fadeOut('fast', function() {
							$('h1').html('<span class="correct">Correct!</span>');
							$('h1').fadeIn('fast');
							setTimeout(function() {
								playback = true;
								$('h1').fadeOut('fast', updatePattern);
							}, 750);
						});
					}
				}, 250);
			}
			else {
				activeTile = true;
				$(this).addClass('active');
				tones[$('section div div').index(this)].play();
				setTimeout(function() {
					$('section div div.active').removeClass('active');
				}, 250);
				$('h1').fadeOut('fast', function() {
					$('h1').html('<span class="incorrect">Incorrect</span>');
					$('h1').fadeIn('fast');
					if (!localStorage.highScore) {
						localStorage.highScore = 0;
					}
					if (pattern.length - 1 > localStorage.highScore) {
						localStorage.highScore = pattern.length - 1;
					}
					$('div#score p.score').html(pattern.length - 1);
					$('div#score p.high-score').html(localStorage.highScore);
					$('div#overlay').fadeIn(1500, function() {
						pattern = [];
						playback = true;
						position = 0;
						activeTile = false;
						$('h1').hide();
						$('div#score').show();
						$('div#score h2.score').fadeIn('fast', function() {
							$('div#score p.score').fadeIn('fast', function() {
								$('div#score h2.high-score').fadeIn('fast', function() {
									$('div#score p.high-score').fadeIn('fast', function() {
										showingScore = true;
									});
								});
							});
						});
					});
				});
			}
		}
	});
	$('body').click(function() {
		if (showingScore) {
			showingScore = false;
			$('div#score p.high-score').fadeOut('fast', function() {
				$('div#score h2.high-score').fadeOut('fast', function() {
					$('div#score p.score').fadeOut('fast', function() {
						$('div#score h2.score').fadeOut('fast', function() {
							$('div#score').hide();
							setTimeout(function() {
								$('img#play').fadeIn('fast');
							}, 1000);
						});
					});
				});
			});
		}
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
			tones[n - 1].play();
		}, (i + 1.5) * 500, pattern[i]);
		setTimeout(function(n) {
			$('section div:nth-child(' + n + ') div').removeClass('active');
		}, (i + 1.5) * 500 + 250, pattern[i]);
	}
	setTimeout(function() {
		$('h1').fadeOut('fast', function() {
			$('h1').html('Repeat');
			$('h1').fadeIn('fast');
			playback = false;
			position = 0;
		});
	}, (pattern.length + 2.5) * 500);
}
