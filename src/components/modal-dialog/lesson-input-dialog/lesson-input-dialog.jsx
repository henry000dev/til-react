import React, {useRef} from 'react';
import './lesson-input-dialog.css';
import {getDateString} from './../../../utils/utils';

function LessonInputDialog({todaysDate, onAddLessonDone, onAddLessonCancelled}) {
    const textAreaRef = useRef();

    function onLessonTextChanged(evt) {
        console.log(evt.currentTarget.value);
    }

    function onAddLessonClicked(evt) {
        const lessonText = textAreaRef.current.value;
        onAddLessonDone(evt, lessonText);
    }

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
                                    <textarea id="add-lesson-text-area" ref={textAreaRef} maxlength="200" onChange={onLessonTextChanged} placeholder="What did you learn?"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="content-footer">
                        <div className="submit-button" type="submit" onClick={onAddLessonClicked} href="/">Add Lesson</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LessonInputDialog;
