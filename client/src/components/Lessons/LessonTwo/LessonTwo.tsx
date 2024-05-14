import "./LessonTwo.css";
import Hands from "../../../assets/Hands.svg";
import Keyboard from "../../Keyboard/Keyboard";
import { useDispatch } from "react-redux";
import {
	startGame,
	resetGame,
	setKeysSequence,
} from "../../../redux/lessonGameSlice";

const LessonTwo = () => {
	const dispatch = useDispatch();

	const handleStartGame = () => {
		dispatch(resetGame());
		dispatch(startGame());
		const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"];
		// const fixedKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];

		const randomKeys = Array.from(
			{ length: 10 },
			() => keys[Math.floor(Math.random() * keys.length)]
		);
		console.log("Generated random keys:", randomKeys);
		dispatch(setKeysSequence(randomKeys));
		// dispatch(setKeysSequence(fixedKeys));
	};

	return (
		<>
			<div className="lesson-two lessons-card-container">
				<h2 className="lesson-title">Basic Position in Ten Finger Typing</h2>
				<div className="keyboard-container">
					<Keyboard className="custom-keyboard-style-les2" />
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
					<button onClick={handleStartGame}>Start Lesson</button>
				</div>
				<div className="hand-container">
					<img src={Hands} alt="" />
				</div>
			</div>
		</>
	);
};

export default LessonTwo;
