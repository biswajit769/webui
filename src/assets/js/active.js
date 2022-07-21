(function($) {
    $("#cssmenu").menumaker({
        title: " ",
        format: "multitoggle",
        breakpoint: 768,
    });


	
		jQuery(window).on('load', function() {
	
			$('#preloader').fadeOut('slow', function() {
				$(this).remove();
			});
	
		});
	})(jQuery);
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200){  
			$('.menu-area').addClass("sticky");
		}
		else{
			$('.menu-area').removeClass("sticky");
		}
	});	