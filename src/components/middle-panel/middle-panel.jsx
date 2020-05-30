import React from 'react';
import Header from './header/header';
import NoLessons from './no-lessons';
import LessonsList from './lessons/lessons-list';
import './middle-panel.css';

function MiddlePanel({lessons}) {
    function showNoLessonsMessage() {
        return <NoLessons />;
    }

    function showLessonsList() {
        return (
            <div className="lessons-container">
                <LessonsList lessons={lessons} />
            </div>
        );
    }

    return (
        <div className="middle-panel">
            <Header />
            {(lessons.length === 0) ? showNoLessonsMessage() : showLessonsList()}
        </div>
    );
}

export default MiddlePanel;