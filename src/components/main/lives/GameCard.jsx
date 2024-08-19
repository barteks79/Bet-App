import { Link } from 'react-router-dom';
import TeamCard from '../../UI/TeamCard';
import OddsButton from '../../UI/OddsButton';
import OddsSection from '../../UI/OddsSection';
import TeamSection from '../../UI/TeamsSection';
import LeagueSection from '../../UI/LeagueSection';

function GameCard({ fixture }) {
	const fulltimeBet = fixture.odds.find(bet => bet.id === 59);

	return (
		<Link className="flex flex-col gap-5 bg-primary-light rounded-md shadow-navbar">
			<LeagueSection id={fixture.league.id}>Live '{fixture.fixture.status.elapsed}</LeagueSection>

			<TeamSection>
				<TeamCard id={fixture.teams.home.id} goals={fixture.teams.home.goals} />
				<TeamCard id={fixture.teams.away.id} goals={fixture.teams.away.goals} />
			</TeamSection>

			<OddsSection>
				{fulltimeBet.values.map(value => {
					return <OddsButton key={value.odd} bet={value.value} odds={+value.odd} />;
				})}
			</OddsSection>
		</Link>
	);
}

export default GameCard;
