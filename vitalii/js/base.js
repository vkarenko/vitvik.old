(function($) {
	$("#loading").fadeOut(2000);
	$("#wrapper").fadeIn(3000);
	// =================================================
	// Document ready function
	// =================================================
	$(function() {
		$(".main-skills .column").click(function(){
			$(this).toggleClass("clicked");
		});
	});
})(jQuery);