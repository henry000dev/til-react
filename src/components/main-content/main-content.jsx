import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import NoLessons from './no-lessons';
import LessonsList from './lessons/lessons-list';
import './main-content.css';

function MainContent({lessons, onEditLessonClicked}) {
    function showNoLessonsMessage() {
        return <NoLessons />;
    }

    function showLessonsList() {
        return (
            <div className="lessons-container">
                <LessonsList lessons={lessons} onEditLessonClicked={onEditLessonClicked} />
            </div>
        );
    }

    return (
        <div className="main-content">
            <Header />
            {(lessons.length === 0) ? showNoLessonsMessage() : showLessonsList()}
            <Footer />
        </div>
    );
}

export default MainContent;