/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AsideDetails from './AsideDetails';

export default function AsideCategory({ icon, isOpen, children }) {
	const type = children.toLowerCase();

	return (
		<li className="flex flex-col items-start gap-5">
			<button className="flex self-center items-center justify-between text-lg text-grey-light w-aside-wrapper">
				<p className="flex items-center gap-5">
					{icon}
					{children}
				</p>
				<FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
			</button>
			{isOpen && <AsideDetails type={type} />}
		</li>
	);
}
