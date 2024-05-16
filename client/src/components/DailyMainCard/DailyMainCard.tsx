/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './DailyMainCard.css';
import dayjs from 'dayjs';
import { fetchProgress } from '../../services';
import { Link } from 'react-router-dom';

const DailyMainCard = () => {
	const [date, setDate] = useState(dayjs());
	const [stats, setStats] = useState<{speed: number, accuracy: number}>({ speed: 0, accuracy: 100 });


	useEffect(() => {
		// Fetch progress for the default date (today's date)
		fetchData(dayjs());
	}, []);

	const fetchData = async (newDate: any) => {
		try {
			const { progress } = await fetchProgress(1, newDate);
			const { speed, accuracy } = progress;
			setStats({ speed, accuracy });
		} catch (error) {
			console.error('Failed to fetch progress:', error);
			setStats({ speed: 0, accuracy: 100 });  // Reset stats on error
		}
	};

	const handleChange = async (newDate: any) => {
		setDate(newDate);
		fetchData(newDate);
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
					<h2 className='stats-title'>Best Stats of {date.format('DD/MM/YYYY')}</h2>
					<p className='stats-text'>Speed: {stats.speed ? `${stats.speed.toFixed(2)} wpm` : 'Loading...'}</p>
					<p className='stats-text'>Accuracy: {stats.accuracy ? `${stats.accuracy.toFixed(2)}%` : 'Loading...'}</p>
				</>}
				{!stats.speed && <h2 className='no-data-available-text'>No data available for this date!</h2>}

				<Link to={'/competition/daily'}><button className='challenge-button'>Go to Challenge</button></Link>


			</div>
		</LocalizationProvider>
	);
};

export default DailyMainCard;
