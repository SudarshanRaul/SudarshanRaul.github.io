$(document).ready(function(){
	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	var scrollTime = 1000;
	var scrollDelay = 5000;
	var scrollHeight;
	
	//Reset : scroll to 0
	function reset() {
		scrollHeight = windowHeight * 1.75;
		$('body,html').animate({scrollTop: 0}, scrollTime-200);
	}
	reset();
	
	var scrollTimer = window.setInterval (scrollBody, scrollDelay);
	
	function scrollBody() {
		if(scrollHeight >= documentHeight){
			reset();
			clearInterval(scrollTimer);
			window.setTimeout(function() {
				scrollTimer = window.setInterval (scrollBody, scrollDelay);
			}, scrollDelay);
		}
		$('body,html').animate({scrollTop: scrollHeight}, scrollTime);
		console.log(scrollHeight);
		scrollHeight = scrollHeight + (windowHeight * 1.75);
	}
});
