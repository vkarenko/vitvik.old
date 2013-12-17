(function($) {
	// =================================================
	// Document ready function
	// =================================================
	$(function() {
		// Query Loader
		$('.html5 body').queryLoader2({
			barHeight: 1,
			barColor: '#E5D9D0',
			backgroundColor: '#5B353B',
			percentage: true,
			completeAnimation: 'grow'
		});

		// =================================================
		// sizes of main elements and actions with logo
		// =================================================
		var WP = $('.html5 .welcome-page'),
			LC = $('.html5 .vitalii');

		// resize WelcomePage
		function resize_WP() {
			WP.height($(window).height() - 16);
		};
		resize_WP();

		// resize LeftColumn
		function resize_LC() {
			if ($(window).height() > 919 && $(window).width() > 760) {
				LC.height($(window).height())
			};
		};
		resize_LC();

		// Window resize
		$(window).resize(function() {
			resize_WP();
			resize_LC();
		});

		//events with Welcome logo
		var WR = $('.html5 .wrapper'),
			WP_WL = $('.html5 .welcome-logo-container');

		WP_WL.click(function() {
			WP.slideUp('800');
			WR.delay(1000).fadeIn('800');
		});

		WP_WL.hover(function() {
			$('body').addClass('hovered')
		}, function() {
			$('body').removeClass('hovered');
		});

		// =================================================
		// Animations with bubles
		// =================================================
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

		// =================================================
		// arrows moving
		// =================================================
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