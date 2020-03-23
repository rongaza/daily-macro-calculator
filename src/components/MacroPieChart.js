import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';
import { Segment } from 'semantic-ui-react';

const MacroPieChart = React.memo(({ dailyCalories, protein, carbs, fat }) => {
	const macroData = [
		{ name: 'Protein', value: protein },
		{ name: 'Carbohydrates', value: carbs },
		{ name: 'Fat', value: fat },
	];
	const COLORS = ['#f2711c', '#e03997', '#21ba45', '#2185d0'];

	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	return (
		<Segment>
			<ResponsiveContainer height={200} width="100%">
				<PieChart width={200} height={200}>
					<Pie
						data={macroData}
						dataKey={'value'}
						fill="#8884d8"
						label={renderCustomizedLabel}
						labelLine={false}
						isAnimationActive={true}
					>
						{macroData.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Tooltip />
					<Legend verticalAlign="top" height={5} />
				</PieChart>
			</ResponsiveContainer>
		</Segment>
	);
});

export default MacroPieChart;
