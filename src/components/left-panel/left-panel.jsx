import React from 'react';
import DateDisplay from './date-display/date-display';
import TodaysMessage from './todays-message/todays-message';
import './left-panel.css';

function LeftPanel() {
    return (
        <div className="left-panel">
            <DateDisplay />
            <TodaysMessage />
        </div>
    );
}

export default LeftPanel;