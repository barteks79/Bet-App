import { QueryClient } from '@tanstack/react-query';
import { getTomorrowDate } from './helpers';

export const queryClient = new QueryClient();

const URL = 'https://api-football-v1.p.rapidapi.com/v3';
const API_KEY = process.env.REACT_APP_API_KEY;

const HEADERS = {
	'x-rapidapi-key': API_KEY,
	'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
};

export const fetchAsideData = async ({ category, limit }) => {
	try {
		const response = await fetch(`${URL}/${category}`, {
			method: 'GET',
			headers: { ...HEADERS },
		});

		const resData = await response.json();
		return resData.response.slice(0, limit);
	} catch (error) {
		console.error(error);
	}
};

export const fetchLiveFixtures = async ({ limit }) => {
	try {
		const response = await fetch(`${URL}/odds/live`, {
			method: 'GET',
			headers: { ...HEADERS },
		});

		const resData = await response.json();
		const filteredData = resData.response.filter(fixture => fixture.odds.find(bet => bet.id === 59));
		return filteredData.slice(0, limit);
	} catch (error) {
		console.log(error);
	}
};

export const fetchById = async ({ category, id }) => {
	try {
		const response = await fetch(`${URL}/${category}${id && `?id=${id}`}`, {
			method: 'GET',
			headers: { ...HEADERS },
		});

		const resData = await response.json();
		return resData.response[0];
	} catch (error) {
		console.log(error);
	}
};

export const fetchTodaysFixtures = async ({ date, page, betId }) => {
	try {
		const response = await fetch(
			`${URL}/odds?date=${date}&page=${page}&bookmaker=8&bet=${betId}
			`,
			{
				method: 'GET',
				headers: { ...HEADERS },
			}
		);

		const resData = await response.json();
		return resData.response;
	} catch (error) {
		console.log(error);
	}
};

// export const fetchLiveFixturesByLeague = async () => {
// 	try {
// 		const response = await fetch(`${URL}/odds/live?bet=59`, {
// 			method: 'GET',
// 			headers: { ...HEADERS },
// 		});
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
