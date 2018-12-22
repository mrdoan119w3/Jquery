var iScrollPos = 0;
		$(window).scroll(function () {
		  var iCurScrollPos = $(this).scrollTop();
		  if (iCurScrollPos < iScrollPos) {
		    // Hành động scroll lên
		    $('.menu_footer_icon').addClass('active');
		  } else {
		    if($(this).scrollTop()==0){
		      //Hành động ở trên top
		    	$('.menu_footer_icon').addClass('active');
		    }else{
		      // Hành động scroll xuống
		    	$('.menu_footer_icon').removeClass('active');
		    }
		  }
		  iScrollPos = iCurScrollPos;
		});
