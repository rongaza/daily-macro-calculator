// calculate basal metabolic rate
// Men	BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
// Women BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)
const calculateBMR = (heightFT, heightIN, weight, gender, age) => {
	// console.log(gender, age, heightFeet, heightInches, bodyweight, activityLevel)
	let bmr = 0;
	let height = getHeight(heightFT, heightIN);

	if (gender === 'male') {
		bmr = Math.floor(66.47 + 6.24 * weight + 12.7 * height - 6.755 * age);
		// console.log('male ', bmr)
	} else {
		bmr = Math.floor(655 + 4.35 * weight + 4.7 * height - 4.7 * age);
		// console.log('female ', bmr)
	}
	return bmr;
};

const getHeight = (feet, inches) => {
	if (inches === '') {
		return feet * 12;
	}
	return parseInt(feet * 12) + parseInt(inches);
};

// returns total daily calories from specified activity level
const calcuateDailyCalories = (basalMetabolicRate, activityLevel) => {
	return basalMetabolicRate * activityLevel;
};

// returns total daily macros of protein/carbohydrates/fat
export const calculateDailyMacros = (gender, age, weight, heightFT, heightIN, activityLevel) => {
	const basalMetabolicRate = calculateBMR(heightFT, heightIN, weight, gender, age);
	const dailyCalories = calcuateDailyCalories(basalMetabolicRate, activityLevel);
	let protein = Math.floor((dailyCalories * 0.3) / 4);
	let carbohydrates = Math.floor((dailyCalories * 0.4) / 4);
	let fat = Math.floor((dailyCalories * 0.3) / 9);

	return {
		dailyCalories,
		protein,
		carbohydrates,
		fat,
	};
};
