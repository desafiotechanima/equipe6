import React from 'react';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import Navbar from '../Navbar';
import { CalendarWrapper, Container, DescriptionWrapper } from './styles';

const Dashboard = () => {
	const [value, setValue] = useState(new Date());

	const user = 'Lazaro';

	/**
	 *
	 *  08:00 - 14:00(trabalho)
	 *  15:00 - 16h30(livre) -> 1:30 livre = 1.5 [1.5] -> Recomendar Flash card
	 *  16:30 - 18:00(brincar com o filho)
	 *  18:00 - 20:00(livre) -> 2:00 livre = 2 [1.5,2] -> Recomendar Pomodoro
	 *  Array final = [1.5,2]
	 *
	 * 	20:00 - hora de dormir(ocupado)
	 *
	 *  forEach(hour => {
	 * 		if (hour >= 3) {
	 * 			pomodoro
	 * 		} else {
	 * 		    Flash Cards
	 * }
	 * })
	 */

	return (
		<>
			<Navbar />
			<Container>
				<DescriptionWrapper>
					<h2>
						Olá, {user}!! <br />
						Algum planejamento novo?
						<br />
						<br />
					</h2>

					<h1>Plano Diário</h1>
				</DescriptionWrapper>
				<CalendarWrapper>
					<Calendar
						value={value}
						onChange={setValue}
						month={value}
						fullWidth
						size="md"
						styles={theme => ({
							cell: {
								border: `1px solid ${
									theme.colorScheme === 'dark'
										? theme.colors.dark[4]
										: theme.colors.gray[2]
								}`,
							},
							day: {
								borderRadius: 0,
								height: 70,
								fontSize: theme.fontSizes.lg,
							},
							weekday: { fontSize: theme.fontSizes.lg },
							weekdayCell: {
								fontSize: theme.fontSizes.xl,
								backgroundColor:
									theme.colorScheme === 'dark'
										? theme.colors.dark[5]
										: theme.colors.gray[0],
								border: `1px solid ${
									theme.colorScheme === 'dark'
										? theme.colors.dark[4]
										: theme.colors.gray[2]
								}`,
								height: 70,
							},
						})}
					/>
				</CalendarWrapper>
			</Container>
		</>
	);
};

export default Dashboard;
