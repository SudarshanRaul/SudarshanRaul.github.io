$(document).ready(function(){
	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	var scrollTime = 1000;
	var scrollDelay = 10000;
	var scrollHeight;
	var scrollTimer;
	
	//Reset : scroll to 0
	function reset() {
		scrollHeight = 0;
		if(scrollTimer) {
			clearInterval(scrollTimer);
		}
		$('body,html').animate({scrollTop: scrollHeight}, scrollTime-200);
		scrollTimer = window.setInterval (scrollBody, scrollDelay);
	}
	reset();
	
	function scrollBody() {
		if(scrollHeight >= documentHeight) {
			reset();
		} else {
			$('body,html').animate({scrollTop: scrollHeight}, scrollTime);
			scrollHeight = scrollHeight + (windowHeight * 1.75);
		}
	}
});
