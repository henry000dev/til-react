import React from 'react';
import DateDisplay from './date-display/date-display';
import TodaysMessage from './todays-message/todays-message';
import './sidebar.css';

const SideBar = ({todayHasLesson, onAddLessonClicked}) => (
    <div className="sidebar">
        <DateDisplay />
        {!todayHasLesson && <TodaysMessage onAddLessonClicked={onAddLessonClicked} />}
    </div>
);

export default SideBar;