import React from 'react';
import './todays-message.css';

function showAddLessonInputDilaog() {
    console.log("Button clicked! We need to show the dialog next.")
}

function TodaysMessage() {
    return (
        <div className="todays-message-container">
            <div className="todays-message">
                There is no lesson today yet.
            </div>
            <div className="add-lesson-button" onClick={showAddLessonInputDilaog}>
                Add Today's Lesson
            </div>
        </div>
    );
}

export default TodaysMessage;