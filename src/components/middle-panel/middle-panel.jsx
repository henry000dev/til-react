import React from 'react';
import Header from './header/header';
import LessonsList from './lessons/lessons-list';
import LessonInputDialog from './lesson-input-dialog/lesson-input-dialog';
import './middle-panel.css';

function MiddlePanel({lessons}) {
    return (
        <div className="middle-panel">
            <Header />
            <LessonsList className="lessons-list-container" lessons={lessons} />
            {/* <LessonInputDialog /> */}
        </div>
    );
}

export default MiddlePanel;