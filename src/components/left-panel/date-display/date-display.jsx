import React from 'react';
import './date-display.css';

function DateDisplay() {
    return (
        <div className="date-display-container">
            <p id="date-display-date">19</p>
            <p id="date-display-month">May</p>
            <p id="date-display-year">2020</p>
        </div>
    );
}

export default DateDisplay;