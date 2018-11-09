(function() {

	const SECTION_SELECTOR = '#incline-section';

	window.calcInclineSection = function() {
		let { height, length, inclinePrecentage } = getValuesOnInclineSection(SECTION_SELECTOR);
		clearSection(SECTION_SELECTOR);
		
		let emptyKey;
		try {
			emptyKey = verifyTwoNumbersAndGetEmptyKey({ height, length, inclinePrecentage });
		} catch (e) {		
			showError(SECTION_SELECTOR, e);
		}

		if (emptyKey === 'height') {
			getInputElem(SECTION_SELECTOR, '.height').value = inclinePrecentage / 100 * length;
			return;
		}

		if (emptyKey === 'length') {
			getInputElem(SECTION_SELECTOR, '.length').value = 100 / inclinePrecentage * height;
			return;
		}

		getInputElem(SECTION_SELECTOR, '.incline-precentage').value = height * 100 / length;	
	}

	function verifyTwoNumbersAndGetEmptyKey(params) {
		let emptyParams = _.pick(params, (value, key, object) => _.isEmpty(value));
		let numbersParams = _.pick(params, (value, key, object) => isNumber(value));

		if (_.keys(emptyParams).length === 1 && _.keys(numbersParams).length === 2) {
			return _.keys(emptyParams)[0];
		}

		throw Error('Wrong params: Expected 2 numbers');
	}

	function isNumber(value) {
		return !_.isEmpty(value) && !_.isNaN(value * 1);
	}

	function showError(SECTION_SELECTOR, errMsg) {
		getErrorElement(SECTION_SELECTOR).innerText = errMsg;
	}

	function clearError(SECTION_SELECTOR) {
		getErrorElement(SECTION_SELECTOR).innerText = '';
	}

	function clearInputs(SECTION_SELECTOR) {
		document.body.querySelector('.height input').value="";
		document.body.querySelector('.length input').value="";
		document.body.querySelector('.incline-precentage input').value="";
	}

	function clearSection(SECTION_SELECTOR) {
		clearError(SECTION_SELECTOR);
		//clearInputs(SECTION_SELECTOR);
	}
})();
