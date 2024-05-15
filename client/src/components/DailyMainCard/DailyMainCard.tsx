import { useState } from 'react';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './DailyMainCard.css';
import dayjs from 'dayjs';

const DailyMainCard = () => {
	const [value, setValue] = useState(dayjs());

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div id='daily-container'>

				<DateCalendar
					value={value}
					onChange={newValue => setValue(newValue)}
					className="customCalendar"
				/>


			</div>
		</LocalizationProvider>
	);
};

export default DailyMainCard;
