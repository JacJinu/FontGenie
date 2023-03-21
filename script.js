$(document).ready(function() {
	$('form').on('submit', function(event) {
		event.preventDefault();

		var textInput = $('#textInput').val();

		// Clear previous output
		$('#output').empty();

		// Generate text styles
		var fontStyles = [
    {label: "Bold", style: "font-weight: bold;"},

    
    
    ];

		for (var i = 0; i < fontStyles.length; i++) {
			var textStyle = $('<div class="col-12 text-style"></div>');
			var label = $('<div class="font-style-label"></div>');
			label.text(fontStyles[i].label);
			$('#output').append(label);
			textStyle.attr('style', fontStyles[i].style);
			textStyle.text(textInput);
			$('#output').append(textStyle);
		}
	});
});
