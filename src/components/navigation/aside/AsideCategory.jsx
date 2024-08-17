import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/uiSlice';
import { isDropdownOpen } from '../../../util/helpers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import AsideDetails from './AsideDetails';
import styles from './Animations.module.css';

function AsideCategory({ icon, children }) {
	const dispatch = useDispatch();
	const openedCategory = useSelector(state => state.ui.openedDropdown);

	const category = children.toLowerCase();
	const isCategoryOpen = isDropdownOpen(openedCategory, category);

	const openDropdownHandler = () => {
		dispatch(uiActions.openDropdown(category));
	};

	return (
		<li className="flex flex-col items-center gap-5 text-xl">
			<button
				onClick={openDropdownHandler}
				className={`flex items-center justify-between w-wrapper hover:text-white transition-colors duration-150 ${
					isCategoryOpen ? 'text-white' : 'text-grey-light'
				}`}>
				<p className="flex items-center gap-5">
					{icon}
					{children}
				</p>
				<FontAwesomeIcon icon={faChevronUp} rotation={isCategoryOpen ? 180 : 0} className={styles.chevron} />
			</button>
			<AsideDetails isOpen={isCategoryOpen} />
		</li>
	);
}

export default AsideCategory;
