(function() {
	window.getValuesOnInclineSection = function(containerSelector) {
		let height = getValueOfInput(containerSelector, '.height');
		let length = getValueOfInput(containerSelector, '.length');
		let inclinePrecentage = getValueOfInput(containerSelector, '.incline-precentage');

		return { height, length, inclinePrecentage };
	}


	window.getInputElem = function(containerSelector, parentSelector) {
		let container = document.body.querySelector(containerSelector);
		return container.querySelector(`${parentSelector} input`);
	}

	window.getValueOfInput = function(containerSelector, parentSelector) {
		return getInputElem(containerSelector, parentSelector).value;
	}

	window.getErrorElement = function(containerSelector) {
		let container = document.body.querySelector(containerSelector);
		let errorElement = container.querySelector('.err');
		return errorElement;
	}
})();
