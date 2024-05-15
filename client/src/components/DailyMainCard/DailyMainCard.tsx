import { useState } from 'react';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './DailyMainCard.css';
import dayjs from 'dayjs';
import { fetchProgress } from '../../services';

const DailyMainCard = () => {
	const [date, setDate] = useState(dayjs());
	const [stats, setStats] = useState({ speed: null, accuracy: null });

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleChange = async (newDate: any) => {
		setDate(newDate);
		try {
			const { progress } = await fetchProgress(1, newDate);
			const { speed, accuracy } = progress;
			console.log('handleChange ~ progress:', { speed, accuracy });
			setStats({ speed, accuracy });
		} catch (error) {
			console.error('Failed to fetch progress:', error);
			setStats({ speed: null, accuracy: null });  // Reset stats on error
		}
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div id='daily-container'>

				<DateCalendar
					value={date}
					onChange={handleChange}
					className="customCalendar"

				/>

				{stats.speed && <>
					<h2>Best Stats of {date.format('DD/MM/YYYY')}</h2>
					<p>Speed: {stats.speed ? `${stats.speed} W/minute` : 'Loading...'}</p>
					<p>Accuracy: {stats.accuracy ? `${stats.accuracy}%` : 'Loading...'}</p>
				</>}
				{!stats.speed && <h2>No data available for this date!</h2>}


			</div>
		</LocalizationProvider>
	);
};

export default DailyMainCard;
