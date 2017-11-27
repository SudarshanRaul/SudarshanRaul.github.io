$(document).ready(function(){
	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	var scrollHeight = windowHeight * 1.5;
	var scrollTime = 700;
	var scrollDelay = 2000;
	
	//Reset : scroll to 0
	$('body,html').animate({scrollTop: 0}, scrollTime);
	
	window.setInterval (function() {
		$('body,html').animate({scrollTop: scrollHeight}, scrollTime);
		console.log(scrollHeight);
		scrollHeight = scrollHeight + (windowHeight / 2);
	}, scrollDelay);
});
