import React, { useEffect } from 'react';
import { useState } from 'react';
import { Calendar, TimeRangeInput } from '@mantine/dates';
import Navbar from '../Navbar';
import {
	CalendarWrapper,
	Container,
	DatesWrapper,
	DescriptionWrapper,
} from './styles';
import { Button, Input, Modal } from '@mantine/core';
import { BsCheck } from 'react-icons/bs';
import axios from 'axios';

const Dashboard = () => {
	const [value, setValue] = useState(new Date());
	const [opened, setOpened] = useState(false);
	const [desiredDate, setDesiredDate] = useState([]);

	const [allPlannings, setAllPlannings] = useState([
		{ date: '2022-04-07', freeTime: 5 },
	]);
	const [planning, setPlanning] = useState({});

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

	const monthName = [
		'Janeiro',
		'Fevereiro',
		'Março',
		'Abril',
		'Maio',
		'Junho',
		'Julho',
		'Agosto',
		'Setembro',
		'Outubro',
		'Novembro',
		'Dezembro',
	];

	// email
	// senha

	let horariosArray = ['15:00 - 16:30', '18:00 - 20:00'];
	// let horasArray = [1.5, 2];

	useEffect(() => {
		let day = value.getDate();
		let month = value.getMonth();
		let year = value.getFullYear();

		setDesiredDate({ day: day, month: month, year: year });
	}, [value]);

	const addNewPlan = () => {
		allPlannings.push({
			date: planning.date,
			freeTime: planning.freeTime,
		});

		console.log(allPlannings);
	};

	return (
		<>
			<Navbar />
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title="Seu Planejamento"
			>
				{/* Modal content */}
				<div>
					<div>
						<h1>
							Dia {desiredDate.day} de {monthName[desiredDate.month]} de{' '}
							{desiredDate.year}
						</h1>
						<div>
							{horariosArray && (
								<DatesWrapper>
									<p>Horários indisponíveis</p>
									<div style={{ margin: '1rem 0' }}>
										<div>
											<form
												style={{
													display: 'flex',
													justifyContent: 'space-around',
													alignItems: 'center',
												}}
											>
												<Input
													type="date"
													onChange={e => {
														allPlannings.forEach(plan => {
															if (plan.date === e.target.value) {
																e.target.value = '0000-00-00';
															} else {
																setPlanning({
																	...planning,
																	date: e.target.value,
																});
															}
														});
													}}
												/>
												<Input
													type="number"
													maxLength="2"
													onChange={e => {
														if (e.target.value > 24) {
															e.target.value = 24;
														}
														setPlanning({
															...planning,
															freeTime: e.target.value,
														});
													}}
													placeholder="Horas livres"
												/>
												<Button onClick={addNewPlan}>
													<BsCheck />
												</Button>
											</form>
										</div>
									</div>
								</DatesWrapper>
							)}
							<div>{/* Tabela de horarios */}</div>
						</div>
					</div>
					<div>
						<p>Nossa Recomendação:</p>
						<div></div>
					</div>
				</div>
			</Modal>

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
						onChange={e => {
							setValue(e);
							setOpened(() => !opened);
						}}
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
								height: 100,
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
								height: 80,
							},
						})}
					/>
				</CalendarWrapper>
			</Container>
		</>
	);
};

export default Dashboard;
