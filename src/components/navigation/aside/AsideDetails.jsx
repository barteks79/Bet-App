import styles from './Animations.module.css';
import AsideDetail from './AsideDetail';

function AsideDetails({ data, category, isOpen }) {
	const isLeague = category === 'leagues';

	return (
		<ul
			className={`flex flex-col items-center gap-5 w-full bg-primary text-lg font-light text-grey-light ${
				isOpen && 'py-5 max-h-[400px]'
			} ${styles.dropdown}`}>
			{data.map(item => (
				<AsideDetail key={isLeague ? item.league.id : item.code} data={item} category={category} />
			))}
		</ul>
	);
}

export default AsideDetails;
