import { useQuery } from '@tanstack/react-query';
import { fetchLiveFixtures, fetchTodaysFixtures } from '../util/http';
import { getTomorrowDate } from '../util/helpers';
import HomeContainer from '../components/main/live/HomeContainer';

function HomePage() {
	const { data: liveData } = useQuery({
		queryKey: ['live', 'fixtures'],
		queryFn: () => fetchLiveFixtures({ limit: 4 }),
		stealTime: 30000,
		refetchInterval: 30000,
	});

	const { data: upcomingData } = useQuery({
		queryKey: ['upcoming', 'fixtures'],
		queryFn: () => fetchTodaysFixtures({ date: getTomorrowDate(), page: 1, betId: 1 }),
		stealTime: 60000,
		refetchInterval: 60000,
	});

	console.log('LiveMatches: ', liveData);
	console.log('UpcomingMatches: ', upcomingData);

	return (
		<>
			<HomeContainer data={liveData} label="Live Matches" href="/live" />
			<HomeContainer data={upcomingData} label="Upcoming Matches" href="/upcoming" />
		</>
	);
}

export default HomePage;

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
