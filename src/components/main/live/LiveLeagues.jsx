import MainWrapper from '../../wrappers/MainWrapper';
import ContainerLabels from '../home/ContainerLabels';
import LiveCard from './LiveCard';

function LiveLeagues() {
	const obj = {
		fixture: {
			id: 1262490,
			status: {
				long: 'Second Half',
				elapsed: 83,
				seconds: '83:20',
			},
		},
		league: {
			id: 1129,
			season: 2024,
		},
		teams: {
			home: {
				id: 3680,
				goals: 2,
			},
			away: {
				id: 8015,
				goals: 1,
			},
		},
		status: {
			stopped: false,
			blocked: false,
			finished: false,
		},
		update: '2024-08-21T12:46:18+00:00',
		odds: [
			{
				id: 33,
				name: 'Asian Handicap',
				values: [
					{
						value: 'Home',
						odd: '1.1',
						handicap: '-0.75',
						main: false,
						suspended: false,
					},
					{
						value: 'Away',
						odd: '6.6',
						handicap: '0.75',
						main: false,
						suspended: false,
					},
					{
						value: 'Home',
						odd: '1.19',
						handicap: '-1',
						main: false,
						suspended: false,
					},
					{
						value: 'Away',
						odd: '4.3',
						handicap: '1',
						main: false,
						suspended: false,
					},
					{
						value: 'Home',
						odd: '2.475',
						handicap: '-1.5',
						main: false,
						suspended: false,
					},
					{
						value: 'Away',
						odd: '1.475',
						handicap: '1.5',
						main: false,
						suspended: false,
					},
					{
						value: 'Home',
						odd: '1.925',
						handicap: '-1.25',
						main: true,
						suspended: false,
					},
					{
						value: 'Away',
						odd: '1.875',
						handicap: '1.25',
						main: true,
						suspended: false,
					},
					{
						value: 'Home',
						odd: '3.4',
						handicap: '-1.75',
						main: false,
						suspended: false,
					},
					{
						value: 'Away',
						odd: '1.275',
						handicap: '1.75',
						main: false,
						suspended: false,
					},
				],
			},
			{
				id: 23,
				name: 'Final Score',
				values: [
					{
						value: '1-0',
						odd: '8.5',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '2-0',
						odd: '8',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '2-1',
						odd: '1.727',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '3-0',
						odd: '10',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '3-1',
						odd: '3.1',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '3-2',
						odd: '21',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '4-0',
						odd: '15',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '4-1',
						odd: '12',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '4-2',
						odd: '51',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '4-3',
						odd: '101',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '5-0',
						odd: '26',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '5-1',
						odd: '34',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '5-2',
						odd: '101',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '5-3',
						odd: '67',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '6-0',
						odd: '41',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '6-1',
						odd: '101',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '6-2',
						odd: '101',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '7-0',
						odd: '81',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '7-1',
						odd: '51',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '0-0',
						odd: '13',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '1-1',
						odd: '2.25',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '2-2',
						odd: '10',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '3-3',
						odd: '81',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '0-1',
						odd: '3.5',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '0-2',
						odd: '11',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '1-2',
						odd: '12',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '0-3',
						odd: '41',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '1-3',
						odd: '51',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '2-3',
						odd: '51',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '0-4',
						odd: '126',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '1-4',
						odd: '101',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '2-4',
						odd: '126',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '3-4',
						odd: '126',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '5-4',
						odd: '126',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '6-3',
						odd: '126',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '7-2',
						odd: '101',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '4-4',
						odd: '126',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '0-5',
						odd: '126',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '1-5',
						odd: '126',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '2-5',
						odd: '126',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '3-5',
						odd: '126',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '8-1',
						odd: '126',
						handicap: null,
						main: null,
						suspended: true,
					},
				],
			},
			{
				id: 20,
				name: 'Match Corners',
				values: [
					{
						value: 'Over',
						odd: '9',
						handicap: '10',
						main: null,
						suspended: false,
					},
					{
						value: 'Exactly',
						odd: '4.5',
						handicap: '10',
						main: null,
						suspended: false,
					},
					{
						value: 'Under',
						odd: '1.333',
						handicap: '10',
						main: null,
						suspended: false,
					},
					{
						value: 'Over',
						odd: '23',
						handicap: '11',
						main: null,
						suspended: false,
					},
					{
						value: 'Exactly',
						odd: '11',
						handicap: '11',
						main: null,
						suspended: false,
					},
					{
						value: 'Under',
						odd: '1.071',
						handicap: '11',
						main: null,
						suspended: false,
					},
					{
						value: 'Over',
						odd: '3.25',
						handicap: '9',
						main: null,
						suspended: false,
					},
					{
						value: 'Exactly',
						odd: '2.6',
						handicap: '9',
						main: null,
						suspended: false,
					},
					{
						value: 'Under',
						odd: '2.5',
						handicap: '9',
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 36,
				name: 'Over/Under Line',
				values: [
					{
						value: 'Over',
						odd: '2.025',
						handicap: '3.5',
						main: true,
						suspended: false,
					},
					{
						value: 'Under',
						odd: '1.775',
						handicap: '3.5',
						main: true,
						suspended: false,
					},
					{
						value: 'Over',
						odd: '2.475',
						handicap: '3.75',
						main: false,
						suspended: false,
					},
					{
						value: 'Under',
						odd: '1.475',
						handicap: '3.75',
						main: false,
						suspended: false,
					},
					{
						value: 'Over',
						odd: '4.45',
						handicap: '4',
						main: false,
						suspended: false,
					},
					{
						value: 'Under',
						odd: '1.18',
						handicap: '4',
						main: false,
						suspended: false,
					},
				],
			},
			{
				id: 25,
				name: 'Match Goals',
				values: [
					{
						value: 'Over',
						odd: '13',
						handicap: '5.5',
						main: null,
						suspended: false,
					},
					{
						value: 'Under',
						odd: '1.012',
						handicap: '5.5',
						main: null,
						suspended: false,
					},
					{
						value: 'Over',
						odd: '2',
						handicap: '3.5',
						main: null,
						suspended: false,
					},
					{
						value: 'Under',
						odd: '1.727',
						handicap: '3.5',
						main: null,
						suspended: false,
					},
					{
						value: 'Over',
						odd: '6.5',
						handicap: '4.5',
						main: null,
						suspended: false,
					},
					{
						value: 'Under',
						odd: '1.1',
						handicap: '4.5',
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 37,
				name: 'Total Corners',
				values: [
					{
						value: 'Over',
						odd: '1.5',
						handicap: '8.5',
						main: null,
						suspended: false,
					},
					{
						value: 'Under',
						odd: '2.5',
						handicap: '8.5',
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 35,
				name: 'To Win 2nd Half',
				values: [
					{
						value: 'Home',
						odd: '1.002',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: 'Draw',
						odd: '41',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: 'Away',
						odd: '41',
						handicap: null,
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 16,
				name: 'How many goals will Away Team score?',
				values: [
					{
						value: 'No goal',
						odd: '2.25',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '1',
						odd: '1.1',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '2',
						odd: '7',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '3 or more',
						odd: '21',
						handicap: null,
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 44,
				name: 'Race to the 9th corner?',
				values: [
					{
						value: '1',
						odd: '17',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '2',
						odd: '101',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: 'Neither',
						odd: '1.025',
						handicap: null,
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 59,
				name: 'Fulltime Result',
				values: [
					{
						value: 'Home',
						odd: '1.062',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: 'Draw',
						odd: '10',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: 'Away',
						odd: '51',
						handicap: null,
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 58,
				name: 'Home Team Goals',
				values: [
					{
						value: 'Over',
						odd: '8',
						handicap: '3.5',
						main: null,
						suspended: false,
					},
					{
						value: 'Under',
						odd: '1.062',
						handicap: '3.5',
						main: null,
						suspended: false,
					},
					{
						value: 'Over',
						odd: '2.375',
						handicap: '2.5',
						main: null,
						suspended: false,
					},
					{
						value: 'Under',
						odd: '1.533',
						handicap: '2.5',
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 68,
				name: 'Goals Odd/Even',
				values: [
					{
						value: 'Odd',
						odd: '1.5',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: 'Even',
						odd: '2.5',
						handicap: null,
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 39,
				name: 'Away Team Goals',
				values: [
					{
						value: 'Over',
						odd: '6.5',
						handicap: '1.5',
						main: null,
						suspended: false,
					},
					{
						value: 'Under',
						odd: '1.1',
						handicap: '1.5',
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 48,
				name: 'Draw No Bet',
				values: [
					{
						value: 'Home',
						odd: '1.002',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: 'Away',
						odd: '21',
						handicap: null,
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 43,
				name: 'Both Teams To Score (2nd Half)',
				values: [
					{
						value: 'Yes',
						odd: '6.5',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: 'No',
						odd: '1.1',
						handicap: null,
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 21,
				name: '3-Way Handicap',
				values: [
					{
						value: 'Home',
						odd: '34',
						handicap: '-3',
						main: false,
						suspended: false,
					},
					{
						value: 'Draw',
						odd: '12',
						handicap: '3',
						main: false,
						suspended: false,
					},
					{
						value: 'Away',
						odd: '1.05',
						handicap: '3',
						main: false,
						suspended: false,
					},
					{
						value: 'Home',
						odd: '10',
						handicap: '-2',
						main: false,
						suspended: false,
					},
					{
						value: 'Draw',
						odd: '3.1',
						handicap: '2',
						main: false,
						suspended: false,
					},
					{
						value: 'Away',
						odd: '1.444',
						handicap: '2',
						main: false,
						suspended: false,
					},
					{
						value: 'Home',
						odd: '2.5',
						handicap: '-1',
						main: true,
						suspended: false,
					},
					{
						value: 'Draw',
						odd: '1.666',
						handicap: '1',
						main: true,
						suspended: false,
					},
					{
						value: 'Away',
						odd: '10',
						handicap: '1',
						main: true,
						suspended: false,
					},
				],
			},
			{
				id: 109,
				name: 'Which team will score the 4th goal?',
				values: [
					{
						value: '1',
						odd: '2.4',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: 'No goal',
						odd: '1.727',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '2',
						odd: '8.5',
						handicap: null,
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 32,
				name: 'Asian Corners',
				values: [
					{
						value: 'Over',
						odd: '2.15',
						handicap: '9',
						main: null,
						suspended: false,
					},
					{
						value: 'Under',
						odd: '1.675',
						handicap: '9',
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 62,
				name: 'Last Team to Score (3 way)',
				values: [
					{
						value: '1',
						odd: '1.05',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: 'No goal',
						odd: '13',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '2',
						odd: '8.5',
						handicap: null,
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 70,
				name: 'Away Team Score a Goal (2nd Half)',
				values: [
					{
						value: 'Yes',
						odd: '7',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: 'No',
						odd: '1.1',
						handicap: null,
						main: null,
						suspended: false,
					},
				],
			},
			{
				id: 67,
				name: 'How many goals will Home Team score?',
				values: [
					{
						value: 'No goal',
						odd: '2.75',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '1',
						odd: '2',
						handicap: null,
						main: null,
						suspended: true,
					},
					{
						value: '2',
						odd: '1.533',
						handicap: null,
						main: null,
						suspended: false,
					},
					{
						value: '3 or more',
						odd: '2.375',
						handicap: null,
						main: null,
						suspended: false,
					},
				],
			},
		],
	};

	return (
		<MainWrapper>
			<ContainerLabels
				label="Premiere League"
				href="premiere-league"
				logo="https://media.api-sports.io/football/leagues/39.png"
			/>
			<section className="flex flex-wrap w-live-wrapper gap-10 pb-10">
				<LiveCard key={obj.fixture.id} fixture={obj} isLivePage />
				<LiveCard key={obj.fixture.id} fixture={obj} isLivePage />
				<LiveCard key={obj.fixture.id} fixture={obj} isLivePage />
				<LiveCard key={obj.fixture.id} fixture={obj} isLivePage />
			</section>
		</MainWrapper>
	);
}

export default LiveLeagues;
