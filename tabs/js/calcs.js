(function(){
	$(".height-section .calc").on("click", function() {
		window.clearErrorAndResults();
		var sectionSelector = '.height-section';
		var length = $(sectionSelector + " .length input").val();
		var incline = $(sectionSelector + " .incline input").val();

		if (!isNumber(length)) {
			showError('הערכים צריכים להיות מספרים');
			return;
		}

		var inclineValidation = isInclineValid(incline);
		if (!inclineValidation.isValid) {
			showError(inclineValidation.errMsg);
			return;	
		}

		var result = calcHeight({ length, incline });
		showResult({ sectionSelector, result });
	});

	$(".length-section .calc").on("click", function() {
		window.clearErrorAndResults();
		var sectionSelector = '.length-section';
		var height = $(sectionSelector + " .height input").val();
		var incline = $(sectionSelector + " .incline input").val();

		if (!isNumber(height)) {
			showError('הערכים צריכים להיות מספרים');
			return;
		}

		var inclineValidation = isInclineValid(incline);
		if (!inclineValidation.isValid) {
			showError(inclineValidation.errMsg);
			return;	
		}

		var result = calcLength({ height, incline });
		showResult({ sectionSelector, result });
	});

	function isInclineValid(incline) {
		if (!isNumber(incline)) {
			return { isValid: false, errMsg: 'הערכים צריכים להיות מספרים' };
		}

		if (toNumber(incline) === 0) {
			return { isValid: false, errMsg: 'אחוז שיפוע צריך להיות שונה מ-0' };
		}

		return { isValid: true };
	}
	
	function calcHeight({ length, incline }) {
		return incline / 100 * length;
	}

	function calcLength({ height, incline }) {
		return 100 / incline * height
	}

	function showResult({ sectionSelector, result }) {
		$(sectionSelector + " .result").text(result);
	}

	function showError(errMsg) {
		var errMsg = 'שגיאה: ' + errMsg;
		$(".error").text(errMsg);
	}

	function isNumber(value) {
		return !isEmpty(value) && !isNaN(toNumber(value));
	}

	function isEmpty(value) {
		return value === undefined || value === null || value === '';
	}

	function toNumber(str) {
		return (str * 1);	
	}
})();