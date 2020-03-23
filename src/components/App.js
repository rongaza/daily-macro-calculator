import React, { useState } from 'react';
import MacroForm from './MacroForm';
import Modal from './Modal';

import { calculateDailyMacros } from '../utils/formulas';
import { Menu, Container, Header, Divider } from 'semantic-ui-react';

const App = () => {
	const [macros, setMacros] = useState({});
	const [displayMacros, setDisplayMacros] = useState(false);

	const handleSetMacros = (gender, age, weight, heightFT, heightIN, activityLevel) => {
		const macros = calculateDailyMacros(gender, age, weight, heightFT, heightIN, activityLevel);
		setMacros({ ...macros });
		setDisplayMacros(true);
	};

	const handleDisplayMacros = display => {
		setDisplayMacros(display);
	};

	return (
		<Container>
			<Menu pointing secondary>
				<Menu.Item>
					<h1>Macro Calculator</h1>
				</Menu.Item>
			</Menu>
			<Container>
				<h4>
					To calculate your daily calorie and macro goals, simply fill out the information
					on my calculator below!
				</h4>
			</Container>
			<Divider hidden />
			<MacroForm handleSetMacros={handleSetMacros} />
			<Divider hidden />
			<Modal displayMacros={displayMacros} macros={macros} setDisplayMacros={handleDisplayMacros} />
		</Container>
	);
};

export default App;
