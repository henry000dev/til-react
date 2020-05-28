import React from 'react';
import './lesson-input-dialog.css';
import {getDateString} from './../../../utils/utils';

function LessonInputDialog({todaysDate, onAddLessonDone, onAddLessonCancelled}) {
    return (
        <div>
            <div id="lessonInput" className="lesson-input-dialog">
                <div className="dialog-content">
                    <div className="content-header">
                        <div className="title">Add Today's Lesson</div>
                        <div className="close-button" onClick={onAddLessonCancelled}>&times;</div>
                    </div>
                    <div className="content-body">
                        <div className="content-date">{getDateString(todaysDate)}</div>
                        <div className="content-text-area">
                            <form action="/">
                                <div>
                                    <textarea placeholder="What did you learn?"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="content-footer">
                        <div className="submit-button" type="submit" onClick={onAddLessonDone} href="/">Add Lesson</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LessonInputDialog;
