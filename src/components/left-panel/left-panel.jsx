import React from 'react';
import DateDisplay from './date-display/date-display';
import TodaysMessage from './todays-message/todays-message';
import './left-panel.css';

const LeftPanel = ({todaysDate, onAddLessonClicked}) => (
    <div className="left-panel">
        <DateDisplay todaysDate={todaysDate} />
        <TodaysMessage onAddLessonClicked={onAddLessonClicked} />
    </div>
);

export default LeftPanel;