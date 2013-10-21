
$(document).ready(function(){
    
	$('.hero ul').bxSlider({
		pager: false,
		auto: false
	});
	
	$('.photo a').fancybox({
		prevEffect: 'none',
		nextEffect: 'none',
		padding: 0,
		helpers: {
			overlay: {
				css: { 'background': 'rgba(0,0,0,.85)' }
			}
		}
	});
	
	$('.menu a').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	
	var input = document.createElement("input");
	if(('placeholder' in input) == false) {
		$('.wufoo').addClass('placeholder-false');
	};
	
});
