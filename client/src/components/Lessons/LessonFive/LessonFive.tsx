import "./LessonFive.css";
import Hands from "../../../assets/Hands.svg";
import Keyboard from "../../Keyboard/Keyboard";
import { useDispatch } from "react-redux";
import {
	startGame,
	resetGame,
	setKeysSequence,
} from "../../../redux/lessonGameSlice";

const LessonThree = () => {
	const dispatch = useDispatch();

	const handleStartGame = () => {
		dispatch(resetGame());
		dispatch(startGame());
		const keys = [
			"a",
			"s",
			"d",
			"f",
			"g",
			"h",
			"j",
			"k",
			"l",
			";",
			"'",
			"q",
			"w",
			"e",
			"r",
			"t",
			"y",
			"u",
			"i",
			"o",
			"p",
			"[",
			"]",
			"\\",
			"z",
			"x",
			"c",
			"v",
			"b",
			"n",
			"m",
			",",
			".",
			"/",
			"`",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"0",
			"-",
			"=",
		];

		const randomKeys = Array.from(
			{ length: 25 },
			() => keys[Math.floor(Math.random() * keys.length)]
		);
		console.log("Generated random keys:", randomKeys);
		dispatch(setKeysSequence(randomKeys));
	};

	return (
		<>
			<div className="lesson-two lessons-card-container">
				<h2 className="lesson-title">Master Typing</h2>
				<div className="keyboard-container">
					<Keyboard className="custom-keyboard-style-les2" />
				</div>
				<div className="text-container">
					<h4>Instructions:</h4>
					<ol>
						<li>
							Prepare yourself in the "Basic Position" with your fingers on the
							home row keys.
						</li>
						<li>
							A random key will appear on the screen from the following set:
							<ul>
								<li>Row 1: a, s, d, f, g, h, j, k, l, ;, '</li>
								<li>Row 2: q, w, e, r, t, y, u, i, o, p, [, ], \</li>
								<li>Row 3: z, x, c, v, b, n, m, ,, ., /</li>
								<li>Row 4: `, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -, =</li>
							</ul>
						</li>
						<li>
							Your task is to type the displayed key as quickly and accurately
							as possible.
						</li>
						<li>
							After you type the key, a new random key will appear for you to
							type next.
						</li>
						<li>
							Continue practicing for a set amount of time or until you feel
							comfortable with your speed and accuracy.
						</li>
					</ol>
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

export default LessonThree;
