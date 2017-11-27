$(document).ready(function(){
	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	var scrollTime = 600;
	var scrollDelay = 5000;
	var scrollHeight;
	var scrollTimer;
	
	//Reset : scroll to 0
	function reset() {
		scrollHeight = windowHeight * 1.75;
		if(scrollTimer) {
			clearInterval(scrollTimer);
		}
		$('body,html').animate({scrollTop: 0}, scrollTime-200);
		scrollTimer = window.setInterval (scrollBody, scrollDelay);
	}
	reset();
	
	scrollTimer = window.setInterval (scrollBody, scrollDelay);
	
	function scrollBody() {
		if(scrollHeight >= documentHeight){
			reset();
		}
		$('body,html').animate({scrollTop: scrollHeight}, scrollTime);
		scrollHeight = scrollHeight + (windowHeight * 1.75);
	}
});
