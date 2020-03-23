import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
	const [values, setValues] = useState({
		gender: 'male',
		age: '',
		weight: '',
		heightFT: '',
		heightIN: '',
		activityLevel: 1.2,
		// goal: '',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (event, { name, value }) => {
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleReset = () => {
		setValues(() => ({
			gender: 'male',
			age: '',
			weight: '',
			heightFT: '',
			heightIN: '',
			activityLevel: 1.2,
			// goal: '',
		}));
		setIsSubmitting(false);
		setErrors({});
	};

	const handleSubmit = e => {
		e.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	useEffect(() => {
		const { gender, age, weight, heightFT, heightIN, activityLevel } = values;

		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback(gender, age, weight, heightFT, heightIN, activityLevel);
			setIsSubmitting(false);
			// reset form
			handleReset();
		}
	}, [errors, callback, isSubmitting, values]);

	return {
		errors,
		values,
		handleReset,
		handleChange,
		handleSubmit,
	};
};

export default useForm;
