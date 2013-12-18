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