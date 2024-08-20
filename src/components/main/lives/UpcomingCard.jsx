import { msToMinutes } from '../../../util/helpers';

import { Link } from 'react-router-dom';
import TeamCard from '../../UI/TeamCard';
import OddsButton from '../../UI/OddsButton';
import OddsSection from '../../UI/OddsSection';
import TeamSection from '../../UI/TeamsSection';
import LeagueSection from '../../UI/LeagueSection';

function UpcomingCard({ fixture, fixtureId }) {
	const fixtureId = fixture.fixture.id;

	return (
		<Link className="flex flex-col flex-1 gap-5 bg-primary-light rounded-md shadow-navbar">
			<LeagueSection id={fixture.league.id}>Live '{msToMinutes(fixture.fixture.timestamp)}</LeagueSection>

			<TeamSection>
				<TeamCard id={fixture.teams.home.id} goals={fixture.teams.home.goals} />
				<TeamCard id={fixture.teams.away.id} goals={fixture.teams.away.goals} />
			</TeamSection>

			<OddsSection>
				{fulltimeBet.values.map(value => {
					const oddKey = +value.odd * Math.random();
					return (
						<OddsButton
							fixtureId={fixture.fixture.id}
							key={oddKey}
							bet={fulltimeBet.name}
							value={value.value}
							odds={+value.odd}
						/>
					);
				})}
			</OddsSection>
		</Link>
	);
}

export default UpcomingCard;
