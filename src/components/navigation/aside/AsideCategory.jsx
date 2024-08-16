/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/uiSlice';
import { isDropdownOpen } from '../../../util/helpers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AsideDetails from './AsideDetails';

export default function AsideCategory({ icon, children }) {
	const dispatch = useDispatch();
	const openedCategory = useSelector(state => state.ui.openedDropdown);

	const category = children.toLowerCase();
	const isCategoryOpen = isDropdownOpen(openedCategory, category);

	const openDropdownHandler = () => {
		dispatch(uiActions.openDropdown(category));
	};

	return (
		<li className="flex flex-col items-start gap-5">
			<button
				onClick={openDropdownHandler}
				className="flex self-center items-center justify-between text-lg text-grey-light w-aside-wrapper">
				<p className="flex items-center gap-5">
					{icon}
					{children}
				</p>
				<FontAwesomeIcon icon={isCategoryOpen ? faChevronUp : faChevronDown} />
			</button>
			{isCategoryOpen && <AsideDetails type={category} />}
		</li>
	);
}
