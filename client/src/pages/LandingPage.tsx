import "./LandingPage.css";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import TrainingMainCard from "../components/TrainingMainCard/TrainingMainCard";
import CompetitiveMainCard from "../components/CompetitiveMainCard/CompetitiveMainCard";
import DailyMainCard from "../components/DailyMainCard/DailyMainCard";

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<div className="landing-page-card-container">
				<div className="card-container training">
					<h2 className="card-title training-title-landing">Training</h2>
					<TrainingMainCard />
				</div>
				<div className="card-container competitive">
					<h2 className="card-title">Competitive</h2>
					<CompetitiveMainCard />
				</div>
				<div className="card-container daily">
					<h2 className="card-title daily-title">Daily Challenge</h2>
					<DailyMainCard />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
