import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CircleItem({ icon, children, primary = false }) {
	return (
		<li>
			<button
				className={`flex items-center gap-3 rounded-full px-5 h-14 transition-all duration-150 font-inter ${
					primary
						? 'bg-primary-dark shadow-circle hover:shadow-circle-lighter'
						: 'border-grey-light bg-secondary hover:bg-secondary-light'
				}`}>
				<FontAwesomeIcon className="text-white text-xl" icon={icon} />
				{children && <p className="text-white text-xl">{children}</p>}
			</button>
		</li>
	);
}

export default CircleItem;
