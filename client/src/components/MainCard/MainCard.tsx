import { Link } from "react-router-dom";
import "./MainCard.css";

interface MainCardProps {
	title: string;
	imgSrc1?: string;
	imgSrc2?: string;
	imgSrc3?: string;
}

const MainCard = ({ title, imgSrc1, imgSrc2, imgSrc3 }: MainCardProps) => {
	return (
		<div className="card-container">
			<h2 className="card-title">{title}</h2>
			{imgSrc1 && (
				<>
					<p className="typing-race-title">Typing Race</p>
					<Link to="/lobby/typing" className="typing-race-card">
						<img
							src={imgSrc1}
							alt="competition card"
							className="competition-card-svg"
						/>
					</Link>
				</>
			)}
			{imgSrc2 && (
				<>
					<p className="shortcut-race-title">Shortcut Race</p>
					<Link to="/lobby/shortcut" className="shortcut-race-card">
						<img
							src={imgSrc2}
							alt="competition card"
							className="competition-card-svg"
						/>
					</Link>
				</>
			)}
			{imgSrc3 && (
				<>
					<p className="coming-soon-title">Coming Soon!!!</p>
					<Link to="/lobby/shortcut" className="coming-soon-card">
						<img
							src={imgSrc3}
							alt="competition card"
							className="competition-card-svg"
						/>
					</Link>
				</>
			)}
		</div>
	);
};

export default MainCard;
