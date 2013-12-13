(function($) {
	// =================================================
	// Document ready function
	// =================================================
	$(function() {
		//Query Loader
		$('.html5 body').queryLoader2({
			barHeight: 1,
			barColor: '#E5D9D0',
			backgroundColor: '#5B353B',
			percentage: true,
			completeAnimation: 'grow'
		});

		//bubles animations
		var $bubles_1 = $('.html5 .bubles-one'),
			$bubles_2 = $('.html5 .bubles-two'),
			$bubles_3 = $('.html5 .bubles-three');

		$bubles_1.delay(1000).fadeIn(3000);
		$bubles_2.delay(1000).fadeIn(2000);
		$bubles_3.delay(1000).fadeIn(1000);
		//bubles move
		function movebublesone() {
			$bubles_1
				.transition({
					y: 50,
					x: 10
				}, 11000)
				.transition({
					y: 0,
					x: 0
				}, 11000, movebublesone);

		}
		movebublesone();

		function movebublestwo() {
			$bubles_2
				.transition({
					y: -60,
					x: -10
				}, 10000)
				.transition({
					y: 0,
					x: 0
				}, 10000, movebublestwo);

		}
		movebublestwo();

		function movebublesthree() {
			$bubles_3
				.transition({
					y: 85,
					x: 10
				}, 9000)
				.transition({
					y: 0,
					x: 0
				}, 9000, movebublesthree);

		}
		movebublesthree();

		//Welcome page animations
		$(".html5 .welcome-page").height($(window).height() - 16);
		$(window).resize(function() {
			$(".html5 .welcome-page").height($(window).height() - 16);
		});

		//highscreens hack
		if ($(window).height() > 950 && $(window).width() > 1025) {
			$(".vitalii").height($(document).height());
		};
		$(window).resize(function() {
			if ($(window).height() > 950 && $(window).width() > 1025) {
				$(".vitalii").height($(document).height());
			};
		});

		//events with Welcome logo
		$(".html5 .welcome-logo-container").click(function() {
			$(".html5 .welcome-page").slideUp("800");
			$(".html5 .wrapper").delay(1000).fadeIn("800");
		});
		$(".html5 .welcome-logo-container").hover(function() {
			$('body').addClass('hovered')
		}, function() {
			$('body').removeClass('hovered');
		});

		//arrows moving
		function movearrows() {
			var $vitarr = $('.html5 .vitalii a.arrow');

			$vitarr.transition({
				x: 10
			}, 1500).transition({
				x: 0
			}, 1500, movearrows);
		}
		movearrows();

		function movearrows2() {
			var $vikarr = $('.html5 .viktoria a.arrow');

			$vikarr.transition({
				x: -10
			}, 1500).transition({
				x: 0
			}, 1500, movearrows2);
		}
		movearrows2();
	});
})(jQuery);