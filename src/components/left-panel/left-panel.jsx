import React from 'react';
import DateDisplay from './date-display/date-display';
import TodaysMessage from './todays-message/todays-message';
import Footer from './footer/footer';
import './left-panel.css';

const LeftPanel = ({todayHasLesson, todaysDate, onAddLessonClicked}) => (
    <div className="left-panel">
        <DateDisplay todaysDate={todaysDate} />
        {!todayHasLesson && <TodaysMessage onAddLessonClicked={onAddLessonClicked} />}
        <Footer />
    </div>
);

export default LeftPanel;