// JavaScript Document

$(document).ready(function(){
	// read text file
	{
		var fileInput = document.getElementById('fileInput');
        var fileDisplayArea = document.getElementById('fileDisplayArea');

        fileInput.addEventListener('change', function(e) {
            var file = fileInput.files[0];
            var textType = /text.*/;

            if (file.type.match(textType)) {
                var reader = new FileReader();

                reader.onload = function(e) {
					var rawText = reader.result;

					for (var i = 0; i < rawText.length; i++) {
						if (rawText[i] == '*') {
							for (var j = i; j < rawText.length; j++) {
								if (rawText[j] == '\n') {
									rawText = rawText.slice(0, i) + "<h2>" + rawText.slice(i + 1, j) + "</h2>" + rawText.slice(j);
									break;
								}
							}
						} else if (rawText[i] == '@') {
							for (var j = i; j < rawText.length; j++) {
								if (rawText[j] == '\n') {
									rawText = rawText.slice(0, i) + "<i>" + rawText.slice(i + 1, j) + "</i>" + rawText.slice(j);
									break;
								}
							}
						}
					}

					rawText = rawText.replace(/(?:\r\n|\r|\n)/g, '<br />\n');
                	fileDisplayArea.innerText = rawText;
                }
                reader.readAsText(file);    
            } else {
                fileDisplayArea.innerText = "File not supported!"
            }
        });
	}
});