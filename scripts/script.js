// JavaScript Document

function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var allText = rawFile.responseText;
				callback(allText);
			}
		}
	}
	rawFile.send(null);
}

$(document).ready(function(){
	// automatically adjust affix offset:
	$('.nav').affix({offset: {top: $('#header').outerHeight()}});
	
	// smooth scrolling for on-page links:
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
			
		}
	});
	
	$.get('poetry.txt', function(data) {
		alert(data);
	});
	
/*
	// automatic fade-in text:
	$(window).scroll(function(){
		// Check the location of each desired element
		$('p').each(function(i){
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			
			var top_of_object = $(this).offset().top;
			var top_of_window = $(window).scrollTop();
			// If the object is completely visible in the window, fade it in
			if (top_of_window < top_of_object && bottom_of_window > top_of_object ||
				bottom_of_window > bottom_of_object && top_of_window < bottom_of_object) {
				$(this).animate({'opacity':'1'}, 750);
			}
			// Resets transparency if object is out of window
			if (top_of_window > bottom_of_object || bottom_of_window < top_of_object) {
				$(this).stop();
				$(this).css("opacity", .25);
			}
		}); 
	}); */
});