import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import TeamCard from '../../UI/TeamCard';
import OddsButton from '../../UI/OddsButton';

function GameCard() {
	return (
		<Link className="flex flex-col gap-5 bg-primary-light rounded-md shadow-navbar">
			<section className="flex justify-between items-center pt-5 px-7 text-white font-mulish text-lg">
				<div className="flex items-center gap-3 pr-3">
					<FontAwesomeIcon icon={faFutbol} />
					<p>UEFA Champions League</p>
				</div>
				<p className="px-4 py-1 bg-secondary rounded-lg">Live '1</p>
			</section>
			<section className="flex flex-col gap-1 px-7 w-3/4">
				<TeamCard team="Real Madrid" image="https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png" score={3} />
				<TeamCard
					team="Herta Berlin"
					image="https://upload.wikimedia.org/wikipedia/commons/8/81/Hertha_BSC_Logo_2012.svg"
					score={1}
				/>
			</section>
			<section className="flex flex-col xl:flex-row gap-3 justify-between px-7 pb-6 pt-1">
				<OddsButton bet="Real Madrid" odds="1.32" />
				<OddsButton bet="Draw" odds="2.23" />
				<OddsButton bet="Herta Berlin" odds="4.23" />
			</section>
		</Link>
	);
}

export default GameCard;
