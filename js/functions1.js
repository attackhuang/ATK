(function ($) {

	// fancybox
	jQuery(".fancybox").fancybox();
	
		
		$('.bxslider').bxSlider({
			  mode: 'horizontal',
			  useCSS: false,
			  auto:true,
			  infiniteLoop: true,
			  hideControlOnEnd: true,
			  easing: 'easeInBack',
			  speed: 800,
			  pause:6000
		});

$('.bxslider1').bxSlider({
			  mode: 'horizontal',
			  useCSS: false,
			  auto:true,
			  infiniteLoop: true,
			  hideControlOnEnd: true,
			  easing: 'easeInBack',
			  speed: 800,
			  pause:8000
		});

})(jQuery);



