# Jquery
// JavaScript Document
(function($) {
	$(document).ready(function() {
		/*Go to top*/
		$(".gototop").click(function(){
			$('html, body').animate({scrollTop:0}, 500 );
			return false;
		});
	});
})(jQuery);
