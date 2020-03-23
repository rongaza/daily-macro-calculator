import React from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';
import MacroList from './MacroList';

const ModalTest = ({ displayMacros, macros, setDisplayMacros }) => {
	const handleClose = () => {
		setDisplayMacros(false);
	};

	return (
		<Modal open={displayMacros} centered={false} onClose={handleClose}>
			<Modal.Header>Your Daily Macros</Modal.Header>
			<Modal.Content scrolling>
				<MacroList macros={macros} />
			</Modal.Content>
			<Modal.Actions>
				<Button color="red" onClick={handleClose}>
					Close
				</Button>
			</Modal.Actions>
			}
		</Modal>
	);
};

export default ModalTest;
