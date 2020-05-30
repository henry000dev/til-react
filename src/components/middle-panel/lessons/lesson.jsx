import React from 'react';
import './lesson.css';

function Lesson({lesson}) {
    function onLessonClicked(evt) {
        console.log(lesson.text);
    }

    return (
        <div className="lesson-container">
            <div className="lesson-date" onClick={onLessonClicked}>
                {lesson.date}
            </div>
            <div className="lesson-text">
                {lesson.text}
            </div>
        </div>
    );
}

export default Lesson;