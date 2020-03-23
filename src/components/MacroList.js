import React from 'react';
import MacroDisplay from './MacroDisplay';
import { Grid } from 'semantic-ui-react';
import MacroPieChart from './MacroPieChart';

const MacroList = ({ macros }) => {
	const { dailyCalories, protein, carbohydrates, fat } = macros;
	return (
		<div>
			<Grid stackable columns={3}>
				<Grid.Row stretched rows={3}>
					<Grid.Column textAlign="center">
						<MacroDisplay
							name={'Protein'}
							color={'orange'}
							grams={parseInt(protein)}
							label={'Grams'}
						/>
					</Grid.Column>
					<Grid.Column textAlign="center">
						<MacroDisplay
							name={'Carbs'}
							color={'pink'}
							grams={parseInt(carbohydrates)}
							label={'Grams'}
						/>
					</Grid.Column>
					<Grid.Column textAlign="center">
						<MacroDisplay
							name={'Fat'}
							color={'green'}
							grams={parseInt(fat)}
							label={'Grams'}
						/>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns={2} centered>
					<Grid.Column stretched width={8} textAlign="center">
						<MacroDisplay
							name={'Total Cals'}
							color={'blue'}
							grams={parseInt(dailyCalories)}
							label={'Calories'}
						/>
					</Grid.Column>
					<Grid.Column width={8} textAlign="center">
						<MacroPieChart
							dailyCalories={dailyCalories}
							protein={protein}
							carbs={carbohydrates}
							fat={fat}
						/>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row centered columns={1}></Grid.Row>
			</Grid>
		</div>
	);
};

export default MacroList;
