(function() {
	window.clear = function() {
		clearErrorAndResults();
		
		clearSection(".height-section");
		clearSection(".length-section");
		clearSection(".height-lines-section");
	};

	window.clearErrorAndResults = function() {
		clearError();
		clearResults();
	};

	function clearError() {
		$(".error").text('');
	}

	function clearResults() {
		$('.result').each(function() {
			$(this).text('0');
		});
	}

	function clearSection(sectionSelector) {
		var sectionElement = $(sectionSelector);
		// sectionElement.find('.result').each(function() {
		// 	$(this).text('0');
		// });

		sectionElement.find('input').each(function() {
		  $(this).val('');
		});	
	}

})();