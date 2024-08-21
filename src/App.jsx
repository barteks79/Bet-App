import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './util/http';

import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import LivePage from './pages/LivePage';
import BetsPage from './pages/BetsPage';
import CategoryPage from './pages/CategoryPage';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: '/live',
					element: <LivePage />,
				},
				{
					path: '/bets',
					element: <BetsPage />,
				},
				{
					path: '/leagues',
					element: <CategoryPage />,
				},
				{
					path: '/countries',
					element: <CategoryPage />,
				},
			],
		},
	]);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />;
		</QueryClientProvider>
	);
}

export default App;
