$(function() { 
		$(window).scroll(function() {
		 
			if($(this).scrollTop() != 0) {
		 		$('#toTop, #top').fadeIn(); }
		 	else {
		 		$('#toTop, #top').fadeOut(); }
		});
		 
		$('#toTop, #top').click(function() {
		$('body,html').animate({scrollTop:0},800);
		});
		 
});

