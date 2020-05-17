import React from 'react';
import Summary from './summary/summary';
import LessonsList from './lessons-list/lessons-list';
import AddLesson from './add-lesson/add-lesson';
import './body.css';

function Body() {
    return (
        <div id="main-body">
            <Summary />
            <LessonsList />
            <AddLesson />
        </div>
    );
}

export default Body;