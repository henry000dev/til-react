import React from 'react';
import Header from './header/header';
import LessonsList from './lessons/lessons-list';
import './middle-panel.css';

function MiddlePanel() {
    return (
        <div className="middle-panel">
            <Header />
            <LessonsList />
        </div>
    );
}

export default MiddlePanel;