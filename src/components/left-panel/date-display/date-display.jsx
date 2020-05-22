import React from 'react';
import './date-display.css';

const DateDisplay = ({todaysDate}) => (
    <div className="date-display-container">
        <p id="date-display-day">{todaysDate.day}</p>
        <p id="date-display-month">{todaysDate.month}</p>
        <p id="date-display-year">{todaysDate.year}</p>
    </div>
);

export default DateDisplay;