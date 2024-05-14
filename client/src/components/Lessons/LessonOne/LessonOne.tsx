import "./LessonOne.css";
import Hands from "../../../assets/Hands.svg";
import Keyboard from "../../Keyboard/Keyboard";

const LessonOne = () => {
	return (
		<>
			<div className="lesson-one lessons-card-container">
				<h2 className="lesson-title">Introduction</h2>
				<div className="keyboard-container">
					<Keyboard className="custom-keyboard-style" />
				</div>
				<div className="text-container">
					<h4>Finger Placement</h4>
					<h5>Feel the Bumps:</h5>
					<p>
						Locate the bumps on the F and J keys with your index fingers. These
						bumps help you position your fingers correctly without looking.
					</p>
					<p>
						<strong>Left Hand:</strong>
					</p>
					<ul>
						<li>Index finger on F</li>
						<li>Middle finger on D</li>
						<li>Ring finger on S</li>
						<li>Little finger on A</li>
					</ul>

					<p>
						<strong>Right Hand:</strong>
					</p>
					<ul>
						<li>Index finger on J</li>
						<li>Middle finger on K</li>
						<li>Ring finger on L</li>
						<li>Little finger on ;</li>
					</ul>

					<p>
						<strong>Thumbs:</strong> Rest on the spacebar.
					</p>
					<div className="button-container">
						<button>Previous Chapter</button>
						<button>Next Chapter</button>
					</div>
				</div>
				<div className="hand-container">
					<img src={Hands} alt="" />
				</div>
			</div>
		</>
	);
};

export default LessonOne;
