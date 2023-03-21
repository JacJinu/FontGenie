$(document).ready(function() {
	$('form').on('submit', function(event) {
		event.preventDefault();

		var textInput = $('#textInput').val();

		// Clear previous output
		$('#output').empty();

		// Generate text styles
		var fontStyles = [
			{label: "Bold", style: "font-weight: bold;"},
			{label: "Italic", style: "font-style: italic;"},
			{label: "Bold Italic", style: "font-weight: bold; font-style: italic;"},
			{label: "serif-bold", style: "font-weight: bold; font-style: Times New Roman ;"},
			{label: "Underline", style: "text-decoration: underline;"},
			{label: "Strikethrough", style: "text-decoration: line-through;"},
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
