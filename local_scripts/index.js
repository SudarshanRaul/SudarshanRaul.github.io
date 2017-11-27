$(document).ready(function(){
	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	var scrollTime = 500;
	var scrollDelay = 7000;
	var scrollHeight;
	var scrollTimer;
	
	//Reset : scroll to 0
	function reset() {
		console.log("resetting");
		scrollHeight = 0;
		if(scrollTimer) {
			console.log("clearing " + scrollTimer);
			clearInterval(scrollTimer);
		}
		$('body,html').animate({scrollTop: scrollHeight}, scrollTime-200);
		scrollTimer = window.setInterval (scrollBody, scrollDelay);
	}
	reset();
	
	//scrollTimer = window.setInterval (scrollBody, scrollDelay);
	
	function scrollBody() {
		if(scrollHeight >= documentHeight) {
			reset();
		} else {
			console.log("scrooling to " + scrollHeight);
			$('body,html').animate({scrollTop: scrollHeight}, scrollTime);
			scrollHeight = scrollHeight + (windowHeight * 1.75);
		}
	}
});
