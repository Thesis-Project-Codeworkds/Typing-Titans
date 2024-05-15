import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import MainCard from "../components/MainCard/MainCard";
import CompeteCardSVG from "../assets/CompeteCard.svg";
import ShortcutSVG from "../assets/shortcut.svg";
import ComingSoonSVG from "../assets/comingSoon.svg";

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<div>
				<MainCard title="Training" />
				<MainCard
					title="Competitive"
					imgSrc1={CompeteCardSVG}
					imgSrc2={ShortcutSVG}
					imgSrc3={ComingSoonSVG}
				/>
				<MainCard title="Daily Challenges" />
			</div>
		</div>
	);
};

export default LandingPage;
