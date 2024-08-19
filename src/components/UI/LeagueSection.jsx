import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

function LeagueSection({ league, children }) {
	return (
		<section className="flex justify-between items-center pt-5 px-7 text-white font-mulish text-lg">
			<div className="flex items-center gap-3 pr-3">
				<FontAwesomeIcon icon={faFutbol} />
				<p>{league}</p>
			</div>
			<p className="px-4 py-1 bg-secondary rounded-lg">{children}</p>
		</section>
	);
}

export default LeagueSection;
