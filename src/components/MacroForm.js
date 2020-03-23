import React from 'react';
import useForm from '../useForm';
import validate from '../validateMacroForm';
import { Container, Form, Button, Radio, Divider } from 'semantic-ui-react';

const MacroForm = ({ handleSetMacros }) => {
	const { values, handleChange, handleSubmit, handleReset, errors } = useForm(handleSetMacros, validate);

	const handleResetButtonClick = () => {
		handleReset();
	};
	return (
		<Container>
			<Form>
				<Form.Field>
					<Button.Group>
						<Button
							type="button"
							size="small"
							name="gender"
							value="male"
							color={values.gender === 'male' ? 'blue' : null}
							active={values.gender === 'male' ? true : false}
							onClick={handleChange}
						>
							Male
						</Button>
						<Button.Or />
						<Button
							type="button"
							size="small"
							name="gender"
							value="female"
							color={values.gender === 'female' ? 'pink' : null}
							active={values.gender === 'female' ? true : false}
							onClick={handleChange}
						>
							Female
						</Button>
					</Button.Group>
				</Form.Field>

				<Form.Field>
					<label>
						<h4>Age</h4>
					</label>
				</Form.Field>
				<Form.Group>
					<Form.Input
						type="number"
						error={
							errors.age && {
								content: `${errors.age}`,
								pointing: 'above',
							}
						}
						width={2}
						size="small"
						name="age"
						value={values.age || ''}
						placeholder="Age"
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Field>
					<label>
						<h4>Weight</h4>
					</label>
				</Form.Field>
				<Form.Group>
					<Form.Input
						type="number"
						error={
							errors.weight && {
								content: `${errors.weight}`,
								pointing: 'above',
							}
						}
						width={2}
						size="small"
						name="weight"
						placeholder="Pounds"
						value={values.weight || ''}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Field>
					<label>
						<h4>Height</h4>
					</label>
				</Form.Field>
				<Form.Group>
					<Form.Input
						type="number"
						error={
							errors.heightFT && {
								content: `${errors.heightFT}`,
								pointing: 'above',
							}
						}
						name="heightFT"
						placeholder="Feet"
						width={2}
						size="small"
						value={values.heightFT}
						onChange={handleChange}
					/>
					<Form.Input
						error={
							errors.heightIN && {
								content: `${errors.heightIN}`,
								pointing: 'above',
							}
						}
						name="heightIN"
						type="number"
						placeholder="Inches"
						width={2}
						size="small"
						value={values.heightIN}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Field>
					<label>
						<h4>Activity Level</h4>
					</label>
				</Form.Field>
				<Form.Field>
					<Radio
						label="Sedentary - Little / No Exercise"
						name="activityLevel"
						value={1.2}
						checked={values.activityLevel === 1.2 ? true : false}
						onChange={handleChange}
					/>
				</Form.Field>
				<Form.Field>
					<Radio
						label="Exercise - 1-3x per week"
						name="activityLevel"
						value={1.375}
						checked={values.activityLevel === 1.375 ? true : false}
						onChange={handleChange}
					/>
				</Form.Field>
				<Form.Field>
					<Radio
						label="Active - Exercise 3-5x per week"
						name="activityLevel"
						value={1.55}
						checked={values.activityLevel === 1.55 ? true : false}
						onChange={handleChange}
					/>
				</Form.Field>
				<Form.Field>
					<Radio
						label="Very Active - Exercise 6-7x per week"
						name="activityLevel"
						value={1.725}
						checked={values.activityLevel === 1.725 ? true : false}
						onChange={handleChange}
					/>
				</Form.Field>
			</Form>
			<Divider hidden />
			<Button size="large" color="blue" onClick={handleSubmit}>
				Calculate
			</Button>
			<Button size="large" onClick={handleResetButtonClick}>
				Reset
			</Button>
		</Container>
	);
};

export default MacroForm;
