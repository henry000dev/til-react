import React from 'react';
import LessonsList from './lessons-list/lessons-list';
import './body.css';

function Body() {
    return (
        <div id="main-body">
            <LessonsList />
        </div>
    );
}

export default Body;