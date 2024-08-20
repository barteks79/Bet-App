import { useQuery } from '@tanstack/react-query';
import { fetchLiveFixtures } from '../util/http';

import GamesContainer from '../components/main/lives/GamesContainer';

function HomePage() {
	const { data: livesData } = useQuery({
		queryKey: ['live', 'fixtures'],
		queryFn: () => fetchLiveFixtures({ limit: 4 }),
		stealTime: 30000,
		refetchInterval: 30000,
	});

	console.log('LiveMatches: ', livesData);

	return (
		<>
			<GamesContainer data={livesData} label="Live Matches" href="/live" />
			<GamesContainer data={[]} label="Upcoming Matches" href="/upcoming" />
		</>
	);
}

export default HomePage;
