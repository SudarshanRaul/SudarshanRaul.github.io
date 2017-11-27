$(document).ready(function(){
	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	var scrollTime = 700;
	var scrollDelay = 2000;
	var scrollHeight;
	
	//Reset : scroll to 0
	function reset() {
		scrollHeight = windowHeight * 2;
		$('body,html').animate({scrollTop: 0}, scrollTime);
	}
	reset();
	
	var scrollTimer = window.setInterval (scrollBody, scrollDelay);
	
	function scrollBody() {
		if(scrollHeight >= documentHeight){
			reset();
			clearInterval(scrollTimer);
			scrollTimer = window.setInterval (scrollBody, scrollDelay);
		}
		$('body,html').animate({scrollTop: scrollHeight}, scrollTime);
		console.log(scrollHeight);
		scrollHeight = scrollHeight + (windowHeight);
	}
});
