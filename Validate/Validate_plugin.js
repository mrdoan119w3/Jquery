# Jquery
$.validator.addMethod("customemail", 
			function(value, element) {
				return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
			}, 
			"Please enter valid email address"
		);
		$.validator.addMethod("customcompanyemail",
			function(value, element){
				return /^([\w-.]+@(?!gmail\.com)(?!comcast\.net)(?!aol\.com)(?!yahoo\.com)(?!hotmail\.com)([\w-]+.)+[\w-]{2,})?$/.test(value);
			},
			"Please enter your company email address"
		);
		$.validator.addMethod('customphone', function (value, element) {
		    //return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
		    return /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/.test(value);
		}, "Please enter a valid phone number");
    
    var form1 = $('#demo-vali-form1');
		form1.validate({
			rules:{
				email		:	{
					required: {
					  depends:function(){
						  $(this).val($.trim($(this).val()));
						  return true;
					  }   
				  },                  
				  customemail: true
				},
				phone	:	{ 
					required: true,
					customphone: true
				},
			},
			// <sl:translate>
			messages:{
				email	:	{
					required:"This field is required",
					customemail:"Please enter valid email address",
				},
				phone	: "Please enter a valid phone number",
			}
			// </sl:translate>
		});
