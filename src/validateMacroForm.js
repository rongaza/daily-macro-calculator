export default function validateMacroFrom(values) {
	let errors = {};
	if (values.age === '') {
		errors.age = 'REQUIRED';
	} else if (isNaN(values.age)) {
		errors.age = 'Age needs to be a valid number';
	} else if (values.age < 10) {
		errors.age = 'Age needs needs to be greater than 10';
	}

	if (values.weight === '') {
		errors.weight = 'REQUIRED';
	} else if (isNaN(values.weight)) {
		errors.weight = 'Weight needs to be a valid number';
	} else if (values.weight < 10) {
		errors.weight = 'Weight needs to be greater than 10';
	}

	if (values.heightFT === '') {
		errors.heightFT = 'REQUIRED';
	} else if (isNaN(values.heightFT)) {
		errors.heightFT = 'Height needs to be a valid number';
	} else if (values.heightFT < 1) {
		errors.heightFT = 'Height needs to be greater than 0';
	}

	if (isNaN(values.heightIN)) {
		errors.heightIN = 'Height needs to be a valid number';
	}
	return errors;
}
