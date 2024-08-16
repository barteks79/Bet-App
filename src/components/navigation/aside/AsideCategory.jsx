/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AsideDetails from './AsideDetails';

export default function AsideCategory({ icon, isOpen, children }) {
	const type = children.toLowerCase();

	return (
		<li className="flex flex-col items-start">
			<button className="flex items-center justify-between w-full">
				<p>
					{icon}
					{children}
				</p>
				<FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
			</button>
			{isOpen && <AsideDetails data={type} />}
		</li>
	);
}
