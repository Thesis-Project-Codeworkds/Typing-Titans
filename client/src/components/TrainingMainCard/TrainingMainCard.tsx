import "./TrainingMainCard.css";
import { Link } from "react-router-dom";
import Keyboard from "../Keyboard/Keyboard";

const TrainingMainCard = () => {
	return (
		<>
			<Link to="/training" className="keyboard-container-shortcut">
				<Keyboard />
			</Link>
		</>
	);
};

export default TrainingMainCard;
