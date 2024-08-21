import { NavLink } from 'react-router-dom';

function AsideDetail({ data, category }) {
	return (
		<li className="flex w-wrapper items-center gap-5 hover:text-white transition-colors duration-100">
			{category === 'leagues' && (
				<>
					<img src={data.league.logo} className="w-[20px]" />
					<NavLink to={`${category}?id=${data.league.id}`}>{data.league.name}</NavLink>
				</>
			)}

			{category === 'countries' && (
				<>
					<img src={data.flag} className="w-[20px]" />
					<NavLink to={`${category}?code=${data.code}`}>{data.name}</NavLink>
				</>
			)}
		</li>
	);
}

export default AsideDetail;
