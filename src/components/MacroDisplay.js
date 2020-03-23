import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react';
const MacroDisplay = ({ name, color, grams, label }) => {
	return (
		<Segment raised size={'small'}>
			<Statistic color={color}>
				<Statistic.Label>{name}</Statistic.Label>
				<Statistic.Value>{grams}</Statistic.Value>
				<Statistic.Label>{label} Per Day</Statistic.Label>
			</Statistic>
		</Segment>
	);
};

export default MacroDisplay;
