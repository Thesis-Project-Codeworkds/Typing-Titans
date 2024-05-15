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
			<div className="card-container">
				<h2 className="card-title">Training</h2>
				<TrainingMainCard />
			</div>
			<div className="card-container">
				<h2 className="card-title">Competitive</h2>
				<CompetitiveMainCard />
			</div>
			<div className="card-container">
				<h2 className="card-title">Daily Challenge</h2>
				<DailyMainCard />
			</div>
		</div>
	);
};

export default LandingPage;
