import { useSelector } from 'react-redux';
import styles from './Animations.module.css';
import AsideDetail from './AsideDetail';

function AsideDetails({ isOpen }) {
	// const category = useSelector(state => state.ui.openedDropdown);
	// const isLeague = category === 'leagues';
	// const isCountry = category === 'countries';

	const leagues = [
		{
			league: {
				id: 1,
				name: 'Champions League',
				logo: 'https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png',
			},
		},
		{
			league: {
				id: 2,
				name: 'Premiere League',
				logo: 'https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png',
			},
		},
		{
			league: {
				id: 3,
				name: 'Premiere League',
				logo: 'https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png',
			},
		},
		{
			league: {
				id: 4,
				name: 'Premiere League',
				logo: 'https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png',
			},
		},
	];

	const countries = [
		{
			code: 'AL',
			flag: 'https://media.api-sports.io/flags/al.svg',
			name: 'Albania',
		},
		{
			code: 'DZ',
			flag: 'https://media.api-sports.io/flags/al.svg',
			name: 'Algeria',
		},
	];

	return (
		<ul
			className={`flex flex-col items-center gap-5 w-full bg-primary text-xl ${isOpen && `py-5 max-h-80`} ${
				styles.dropdown
			}`}>
			{leagues.map(league => (
				<AsideDetail key={league.league.id} data={league} />
			))}
		</ul>
	);
}

export default AsideDetails;
