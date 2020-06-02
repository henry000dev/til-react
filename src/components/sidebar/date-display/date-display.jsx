import React, {useContext} from 'react';
import TodayContext from './../../../contexts/today.context';
import {getDateParts} from './../../../utils/utils';
import './date-display.css';

function DateDisplay() {
    const todaysDate = useContext(TodayContext);
    const dateParts = getDateParts(todaysDate);

    return (
        <div className="date-display-container">
            <p id="date-display-day">{dateParts.day}</p>
            <p id="date-display-month">{dateParts.month}</p>
            <p id="date-display-year">{dateParts.year}</p>
        </div>
    );
}

export default DateDisplay;