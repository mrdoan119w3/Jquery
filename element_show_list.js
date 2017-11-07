# Jquery
(function($) {
			$(document).ready(function(){
				function trendingLoop() {
					var et_trending_next_post_eq;

					et_trending_next_post_eq = et_trending_active_post_eq + 1;

					if (et_trending_post_count === et_trending_next_post_eq) {
						et_trending_next_post_eq = 0;
					}

					$et_trending_posts.eq(et_trending_active_post_eq).fadeOut(et_trending_fade_speed, function () {
						$et_trending_posts.eq(et_trending_next_post_eq).fadeIn(et_trending_fade_speed);
						et_trending_active_post_eq = et_trending_next_post_eq;
					});

				}
				var $et_trending_container	=	$('ul.product_show');
				if ($et_trending_container.length) {
					var $et_trending_posts = $et_trending_container.children('ul.product_show li'),
						et_trending_post_count = $et_trending_posts.length,
						et_trending_post_duration = 3000,
						et_trending_fade_speed = 300,
						et_trending_active_post_eq = 0;

					$et_trending_posts.not('ul.product_show li:first-child').hide();

					setInterval(function () {
						trendingLoop();
					}, et_trending_post_duration);
				}
			});
		})(jQuery);
