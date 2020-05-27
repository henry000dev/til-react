import React from 'react';
import './todays-message.css';

function TodaysMessage({onAddLessonClicked}) {
    return (
        <div className="todays-message-container">
            <div className="todays-message">
                There is no lesson today yet.
            </div>
            <div className="add-lesson-button" onClick={onAddLessonClicked}>
                Add Today's Lesson
            </div>
        </div>
    );
}

export default TodaysMessage;