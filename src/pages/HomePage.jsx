import { useQuery } from '@tanstack/react-query';
import { fetchLiveFixtures, fetchTodaysFixtures } from '../util/http';

import HomeContainer from '../components/main/lives/HomeContainer';

function HomePage() {
	const { data: liveData } = useQuery({
		queryKey: ['live', 'fixtures'],
		queryFn: () => fetchLiveFixtures({ limit: 4 }),
		stealTime: 30000,
		refetchInterval: 30000,
	});

	const { data: upcomingData } = useQuery({
		queryKey: ['upcoming', 'fixtures'],
		queryFn: () => fetchTodaysFixtures({ page: 1, betId: 1 }),
		stealTime: 60000,
		refetchInterval: 60000,
	});

	// upcomingData: [{
	// 		fixture: { id: 38432432 }
	//      bookmakers: [{
	// 			bets: [
	// 				{
	// 					id: 1,
	// 					name: 'Match Winner',
	// 					values: [
	//                      { value: 'Home', odd: 1.5 },
	//                      { value: 'Draw', odd: 1.5 },
	//                      { value: 'Away', odd: 1.5 },
	//                    ]
	// 				}
	// 			]
	// 		}]
	// }]

	console.log('LiveMatches: ', liveData);
	console.log('UpcomingMatches: ', upcomingData);

	return (
		<>
			<HomeContainer data={liveData} label="Live Matches" href="/live" />
			<HomeContainer data={[]} label="Upcoming Matches" href="/upcoming" />
		</>
	);
}

export default HomePage;
