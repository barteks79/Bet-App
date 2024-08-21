import { Link } from 'react-router-dom';

function CardLink({ children, href }) {
	return (
		<Link to={href} className="flex flex-col flex-1 gap-5 bg-primary-light rounded-md shadow-navbar">
			{children}
		</Link>
	);
}

export default CardLink;
