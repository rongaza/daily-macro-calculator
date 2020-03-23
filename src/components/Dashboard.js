import React, { useState } from 'react';
import MacroForm from './MacroForm';
import MacroList from './MacroList';
import { calculateDailyMacros } from '../utils/formulas';
import { Container, Header, Divider } from 'semantic-ui-react';

const Dashboard = () => {
	const [dailyCalories, setDailyCalories] = useState(0);
	const [protein, setProtein] = useState(0);
	const [carbs, setCarbs] = useState(0);
	const [fat, setFat] = useState(0);
	const [displayMacros, setDisplayMacros] = useState(false);

	const calculateMacros = (gender, age, weight, heightFT, heightIN, activityLevel, goal) => {
		const { calories, protein, carbohydrates, fat } = calculateDailyMacros(
			gender,
			age,
			weight,
			heightFT,
			heightIN,
			activityLevel,
			goal
		);

		setDailyCalories(calories);
		setProtein(protein);
		setCarbs(carbohydrates);
		setFat(fat);
		setDisplayMacros(true);
	};

	return (
		<Container>
			<Header size="huge">MACRO CALCULATOR</Header>
			<Container>
				<p>
					To calculate your daily calorie and macro goals, simply fill out the information
					on my calculator below! Further details on calculating your macros are available
					in my nutrition guide.
				</p>
			</Container>
			<Divider hidden />
			<MacroForm calculateMacros={calculateMacros} />
			<Divider hidden />
			{displayMacros ? (
				<MacroList dailyCalories={dailyCalories} protein={protein} carbs={carbs} fat={fat} />
			) : null}
		</Container>
	);
};

export default Dashboard;
