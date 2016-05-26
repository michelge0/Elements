// JavaScript Document

$(document).ready(function() {
	// automatically adjust affix offset:
	$('.nav').affix({offset: {top: $('#header').outerHeight()}});
		
	// init buttons
	var buttons = $(".link-effect");
	$.each(buttons, function(i, el) {
		el.addEventListener('click', function() {
			loadPage(el.dataset.element);
		});
	});

	addScrolling();
});

function addScrolling() {
	var els = document.querySelectorAll(".nav > li");
	for (var i = 0; i < els.length; i++) {
		var el = els[i];
		el.addEventListener('click', function() {
			console.log(this.childNodes[0]);
			var id = "#" + this.childNodes[0].href.split("#")[1];
			var target = $(id);
			$('html, body').animate({
					scrollTop: target.offset().top
			}, 1000);
			return false;
		});
	}
}

function loadPage(page) {
	$.get("readFiles.php", function(data) {
        var allContent = JSON.parse(data)[page];
        var container = $(".content-container");
        container.empty();
        $(".nav").empty();
        $(".nav").append("<li><a href=\"#header\">To Top</a></li>")
    	for (var i = 0; i < allContent.length; i++) {
    		// add content
	    	var title = allContent[i].split('\n')[0];
			var content = allContent[i].substring(allContent[i].indexOf('\n'));

			var wrapper = document.createElement("div");
			var header = document.createElement("h1");
				header.innerHTML = title;
				header.id = "link" + i;
				wrapper.appendChild(header);
			var body = document.createElement("p");
				body.innerHTML = content;
				wrapper.appendChild(body);

			container.append(wrapper);

			// add link
			var li = document.createElement("li");
			var a = document.createElement("a");
			a.href = "#link" + i;
			li.appendChild(a);
			a.innerHTML = title;
			document.querySelector(".nav").appendChild(li);
			addScrolling();
	    }
	    // scroll to first piece
		$('html, body').animate({
        	scrollTop: $("#link0").offset().top
    	}, 500);
    });
}

