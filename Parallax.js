# Jquery
window.requestAnimationFrame = window.requestAnimationFrame
		 || window.mozRequestAnimationFrame
		 || window.webkitRequestAnimationFrame
		 || window.msRequestAnimationFrame
		 || function(f){setTimeout(f, 1000/60)}
		 //parallax
		function parallaxbubbles(){
			var parallax	=	$('.parallax');
			var fish 		= document.getElementById('fish');
			var bubble1 	= document.getElementById('bubbles1');
			var bubble2 	= document.getElementById('bubbles2');
			
			var parallax_top		= 	parallax.offset().top;	
			var parallax_height 	= 	parallax.outerHeight(); 
			var parallax_bottom		= 	(parallax_top + parallax_height);
			
			var window_height 		= 	window.innerHeight; 
			var window_scrollTop 	= 	$(window).scrollTop();
			var window_bottom		= 	(window_scrollTop + window_height);
			
			var scrolltop 			= 	window.pageYOffset; 
			var scroll_parallax 	= 	((window_scrollTop - parallax_top)/(parallax_height-window_height)) * 100; 

			if ((parallax_top <= window_scrollTop) && ((parallax_bottom - window_height) >= window_scrollTop)){
				fish.removeAttribute('style');
				bubble1.removeAttribute('style');
				bubble2.removeAttribute('style');
				bubble1.style.top 		= 	-scrolltop * .2 + 'px'; // move bubble1 at 20% of scroll rate
				bubble2.style.top 		= 	-scrolltop * .5 + 'px'; // move bubble2 at 50% of scroll rate
				fish.style.left 		= 	-100 + scroll_parallax + '%'; // set position of fish in percentage (starts at -100%)
			}
			if(scroll_parallax>=100){
				$(fish).css({
					'position'	: 'relative',
					'background-position-y': '100%',
					'left'		:	'0',
				});
				$(bubble1).css({
					'display'	:	'none',
				});
				$(bubble2).css({
					'display'	:	'none',
				});
				
			}
		}
		//end-parallax
