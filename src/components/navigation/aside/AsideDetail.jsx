import { NavLink } from 'react-router-dom';

function AsideDetail({ data, isLeague = false, isCountry = false }) {
	return (
		<li className="flex w-wrapper items-center gap-5">
			{!isCountry && isLeague && <img src={data.logo} className="w-[20px]" />}
			{!isLeague && isCountry && <img src={data.flag} className="w-[20px]" />}
			<NavLink>{data.name}</NavLink>
		</li>
	);
}

export default AsideDetail;
