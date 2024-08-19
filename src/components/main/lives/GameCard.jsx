import { Link } from 'react-router-dom';
import TeamCard from '../../UI/TeamCard';
import OddsButton from '../../UI/OddsButton';
import OddsSection from '../../UI/OddsSection';
import TeamSection from '../../UI/TeamsSection';
import LeagueSection from '../../UI/LeagueSection';

function GameCard({ gameId }) {
	return (
		<Link className="flex flex-col gap-5 bg-primary-light rounded-md shadow-navbar">
			<LeagueSection league="UEFA Champions League">Live '1</LeagueSection>

			<TeamSection>
				<TeamCard team="Real Madrid" image="https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png" score={3} />
				<TeamCard
					team="Herta Berlin"
					image="https://upload.wikimedia.org/wikipedia/commons/8/81/Hertha_BSC_Logo_2012.svg"
					score={1}
				/>
			</TeamSection>

			<OddsSection>
				<OddsButton bet="Real Madrid" odds="1.32" />
				<OddsButton bet="Draw" odds="2.23" />
				<OddsButton bet="Herta Berlin" odds="4.23" />
			</OddsSection>
		</Link>
	);
}

export default GameCard;
