import React from 'react';
import Header from './header/header';
import LessonsList from './lessons/lessons-list';
import './middle-panel.css';

function MiddlePanel({lessons}) {
    return (
        <div className="middle-panel">
            <Header />
            <LessonsList className="lessons-list-container" lessons={lessons} />
        </div>
    );
}

export default MiddlePanel;