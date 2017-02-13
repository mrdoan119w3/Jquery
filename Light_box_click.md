# Jquery
 $('body .wpmchimpa-overlay-bg.wpmchimpselector').on( 'click',function (e){
	      var container = $(this).find("#wpmchimpa-main");
	      if (!container.is(e.target) && container.has(e.target).length === 0){
	          $(this).removeClass('show');
	      }
	  });
