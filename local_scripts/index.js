$(document).ready(function(){
	var windowHeight = $(window).height();
	var scrollHeight = windowHeight * 1.5;
	var scrollTime = 700;
	var scrollDelay = 2000;
	window.setInterval (function() {
		$('body,html').animate({scrollTop: scrollHeight}, scrollTime);
		console.log("56");
		scrollHeight = scrollHeight + (windowHeight / 2);
	}, scrollDelay);
});
