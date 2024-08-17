/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CircleItem({ icon, children }) {
	return (
		<li>
			<button
				className={`flex items-center gap-3 rounded-full px-5 h-14 bg-primary-dark transition-all duration-150 font-inter ${
					children ? 'border-grey-light bg-secondary hover:bg-secondary-light' : 'shadow-circle hover:shadow-circle-lighter'
				}`}>
				<FontAwesomeIcon className="text-white text-xl" icon={icon} />
				{children && <p className="text-white text-xl">{children}</p>}
			</button>
		</li>
	);
}

export default CircleItem;
