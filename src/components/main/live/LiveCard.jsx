import CardLink from '../../wrappers/CardLink';
import TeamCard from '../../UI/TeamCard';
import OddsButton from '../../UI/OddsButton';
import OddsSection from '../../UI/OddsSection';
import TeamSection from '../../UI/TeamsSection';
import LeagueSection from '../../UI/LeagueSection';

function LiveCard({ fixture, isLivePage }) {
	const fulltimeBet = fixture.odds.find(bet => bet.id === 59);

	return (
		<CardLink>
			<LeagueSection isLivePage={isLivePage && isLivePage} id={fixture.league.id} red>
				Live '{fixture.fixture.status.elapsed}
			</LeagueSection>

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
		</CardLink>
	);
}

export default LiveCard;
