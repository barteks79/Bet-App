import { useQuery } from '@tanstack/react-query';
import { fetchById } from '../../../util/http';
import { getHoursFromISO } from '../../../util/helpers';

import CardLink from '../../wrappers/CardLink';
import TeamCard from '../../UI/TeamCard';
import OddsButton from '../../UI/OddsButton';
import OddsSection from '../../UI/OddsSection';
import TeamSection from '../../UI/TeamsSection';
import LeagueSection from '../../UI/LeagueSection';

function UpcomingCard({ fixture, fixtureId }) {
	const { data } = useQuery({
		queryKey: ['fixtures', fixtureId],
		queryFn: () => fetchById({ category: 'fixtures', id: fixtureId }),
		staleTime: 30000,
	});

	console.log(fixtureId, data);

	const betData = fixture.bookmakers[0].bets[0];

	return (
		<CardLink>
			<LeagueSection id={fixture.league.id}>{getHoursFromISO(fixture.fixture.date)}</LeagueSection>

			{data && (
				<TeamSection>
					<TeamCard goals={data.goals.home} enabled={false} teamData={data.teams.home} />
					<TeamCard goals={data.goals.away} enabled={false} teamData={data.teams.away} />
				</TeamSection>
			)}

			<OddsSection>
				{betData.values.map(value => {
					const oddKey = +value.odd * Math.random();
					return <OddsButton fixtureId={fixtureId} key={oddKey} bet={betData.name} value={value.value} odds={+value.odd} />;
				})}
			</OddsSection>
		</CardLink>
	);
}

export default UpcomingCard;
