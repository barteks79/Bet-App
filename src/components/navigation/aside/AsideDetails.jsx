import { useSelector } from 'react-redux';
import { isDropdownOpen } from '../../../util/helpers';
import styles from './Animations.module.css';
import AsideDetail from './AsideDetail';

function AsideDetails({ isOpen }) {
	const category = useSelector(state => state.ui.openedDropdown);
	const { leagues, countries } = useSelector(state => state.category);
	const isLeague = isDropdownOpen(category, 'leagues');
	const isCountry = isDropdownOpen(category, 'countries');

	return (
		<ul
			className={`flex flex-col items-center gap-5 w-full bg-primary text-xl ${isOpen && `py-5 max-h-80`} ${
				styles.dropdown
			}`}>
			{isCountry && !isLeague && countries.map(list => <AsideDetail key={list.code} data={list} isCountry />)}
			{!isCountry && isLeague && leagues.map(list => <AsideDetail key={list.league.id} data={list.league} isLeague />)}
		</ul>
	);
}

export default AsideDetails;
