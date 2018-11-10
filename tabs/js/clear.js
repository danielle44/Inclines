(function() {
	window.clear = function() {
		clearErrorAndResults();
		
		clearSection(".height-section");
		clearSection(".length-section");
		clearSection(".height-lines-section");

		setDefaultValues();
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

	function setDefaultValues() {
		$('.height-gap input').each(function() {
			$(this).val('0.1');
		})
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