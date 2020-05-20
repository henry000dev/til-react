import React from 'react';
import Lesson from './lesson';
import './lessons-list.css';

function LessonsList() {
    return (
        <div className="lessons-list-container">
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
        </div>
    );
}

export default LessonsList;