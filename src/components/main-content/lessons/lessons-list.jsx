import React from 'react';
import Lesson from './lesson';
import './lessons-list.css';

function LessonsList({lessons, onEditLessonClicked}) {
    return (
        lessons.map(lesson => {
            return <Lesson key={lesson.date} lesson={lesson} onEditLessonClicked={onEditLessonClicked} />
        })
    );
}

export default LessonsList;