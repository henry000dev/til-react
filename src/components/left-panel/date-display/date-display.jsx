import React from 'react';
import './date-display.css';
import {getDateParts} from './../../../utils/utils';

function DateDisplay({todaysDate}) {
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