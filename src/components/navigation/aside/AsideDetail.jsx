import { NavLink } from 'react-router-dom';

function AsideDetail({ data }) {
	return (
		<li className="flex w-wrapper items-center gap-5">
			<img src={data.league.logo} className="w-[20px]" />
			{/* {!isLeague && isCountry && <img src={data.flag} className="w-[20px]" />} */}
			<NavLink>{data.league.name}</NavLink>
		</li>
	);
}

export default AsideDetail;
