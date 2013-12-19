(function($) {
	// =================================================
	// sizes of main elements and actions with logo
	// =================================================
	var WP = $('.html5 .welcome-page'),
		LC = $('.html5 .vitalii');
	// resize WelcomePage
	function resize_WP() {
		WP.height($(window).height() - 16);
	};
	// resize LeftColumn
	function resize_LC() {
		if ($(window).height() > 919 && $(window).width() > 760) {
			LC.height($(window).height())
		};
	};

	// =================================================
	// Animations with bubles
	// =================================================
	var $bubles_1 = $('.html5 .bubles-one'),
		$bubles_2 = $('.html5 .bubles-two'),
		$bubles_3 = $('.html5 .bubles-three');
	//bubles move
	function movebublesone() {
		$bubles_1
			.delay(1000).fadeIn(3000)
			.transition({
				y: 50,
				x: 10
			}, 11000)
			.transition({
				y: 0,
				x: 0
			}, 11000, movebublesone);
	};
	function movebublestwo() {
		$bubles_2
			.delay(1000).fadeIn(2000)
			.transition({
				y: -60,
				x: -10
			}, 10000)
			.transition({
				y: 0,
				x: 0
			}, 10000, movebublestwo);
	};
	function movebublesthree() {
		$bubles_3
			.delay(1000).fadeIn(1000)
			.transition({
				y: 85,
				x: 10
			}, 9000)
			.transition({
				y: 0,
				x: 0
			}, 9000, movebublesthree);
	};
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
	};
	function movearrows2() {
		var $vikarr = $('.html5 .viktoria a.arrow');

		$vikarr.transition({
			x: -10
		}, 1500).transition({
			x: 0
		}, 1500, movearrows2);
	};

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

		resize_WP();
		resize_LC();
		// Window resize
		$(window).resize(function() {
			resize_WP();
			resize_LC();
		});

		// Bubles functions
		movebublestwo();
		movebublesone();
		movebublesthree();

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

		movearrows();
		movearrows2();
	});
})(jQuery);

//Circles
(function() {
	var width = 1920,
		height = 1080;

	var n = 17,
		m = 12

	var bubles = d3.range(n).map(function() {
		var x = Math.random() * width,
			y = Math.random() * height;
		return {
			vx: Math.random() * 2 - 1,
			vy: Math.random() * 2 - 1,
			path: d3.range(m).map(function() {
				return [x, y];
			}),
			count: 0
		};
	});

	var svg = d3.select(".bubles").append("svg")

	var g = svg.selectAll("g")
		.data(bubles)
		.attr("class", "little")
		.enter().append("g")

	var circle = g.append("circle")
		.attr("r", function() {
			return Math.random() * m;
		})
		.style("fill", "#7BB59F");

	d3.timer(function() {
		for (var i = -1; ++i < n;) {
			var buble = bubles[i],
				path = buble.path,
				dx = buble.vx,
				dy = buble.vy,
				x = path[0][0] += dx,
				y = path[0][1] += dy,
				speed = Math.sqrt(dx * dx + dy * dy),
				count = speed * 10,
				k1 = -5 - speed / 3;

			// Bounce off the walls.
			if (x < 0 || x > width) buble.vx *= -1;
			if (y < 0 || y > height) buble.vy *= -1;
		}

		circle.attr("transform", headTransform);
	});

	function headTransform(d) {
		return "translate(" + d.path[0] + ")";
	}
})();