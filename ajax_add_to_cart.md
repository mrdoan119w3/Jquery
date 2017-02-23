# Jquery
function added_to_cart_ajax(){
			$.ajax({
			   type : "post",
			   //dataType : "json",
			   url : wc_cart_fragments_params.ajax_url,
			   data : {action: "mode_theme_update_cart"},
			   context: this,
			   success: function(response) {
			    $('.dud_cart').html(response);
			   }
			});
		}
		$('body').bind("added_to_cart", function() {
			//added_to_cart_ajax();
			
		 });
     
     
     function mode_theme_update_cart() {
	ob_start();
	echo do_shortcode('[woocommerce_cart]');
	//echo ob_get_clean();
	die();
}
//add_filter( 'wp_ajax_nopriv_mode_theme_update_cart', 'mode_theme_update_cart' );
//add_filter( 'wp_ajax_mode_theme_update_cart', 'mode_theme_update_cart' );
     
     
