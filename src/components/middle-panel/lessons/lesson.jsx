import React from 'react';
import './lesson.css';

function Lesson({lesson}) {
    return (
        <div className="lesson-container">
            <div className="lesson-date">
                {lesson.date}
            </div>
            <div className="lesson-text">
                {lesson.text}
            </div>
        </div>
    );
}

export default Lesson;