import React from 'react';
import Header from './header/header';
import LessonsList from './lessons/lessons-list';
import LessonInputDialog from './lesson-input-dialog/lesson-input-dialog';
import './middle-panel.css';

function MiddlePanel() {
    return (
        <div className="middle-panel">
            <Header />
            {/* <LessonsList /> */}
            <LessonInputDialog />
        </div>
    );
}

export default MiddlePanel;