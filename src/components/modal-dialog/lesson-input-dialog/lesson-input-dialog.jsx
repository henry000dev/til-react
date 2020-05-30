import React, {useRef, useEffect} from 'react';
import './lesson-input-dialog.css';
import {createLesson} from './../../../utils/utils';

/**
 * lessonDate: Text in the following format: May 29, 2020 
 */
function LessonInputDialog({isAddingLesson, lessonDate, lessonText, onEditingLessonDone, onEditingLessonCancelled}) {
    const textAreaRef = useRef();

    // Sets the initial text area value. For some reason using value={lessonText} in the HTML makes it not editable.
    useEffect(() => {
        if (isAddingLesson) {
            textAreaRef.current.value = null;
        } else {
            textAreaRef.current.value = lessonText;
        }
      });

    function onLessonTextChanged(evt) {
        console.log(evt.currentTarget.value);
    }

    function onEditingLessonClicked(evt) {
        const editedLessonText = textAreaRef.current.value;
        const updatedLesson = createLesson(lessonDate, editedLessonText);
        
        if (isAddingLesson) {
            onEditingLessonDone(evt, updatedLesson);
        } else {
            const updatedLesson = createLesson(lessonDate, editedLessonText);
            onEditingLessonDone(evt, updatedLesson);
        }
    }

    return (
        <div>
            <div id="lessonInput" className="lesson-input-dialog">
                <div className="dialog-content">
                    <div className="content-header">
                        <div className="title">{isAddingLesson ? "Add Today's Lesson" : "Update Lesson"}</div>
                        <div className="close-button" onClick={onEditingLessonCancelled}>&times;</div>
                    </div>
                    <div className="content-body">
                        <div className="content-date">{isAddingLesson ? lessonDate : lessonDate}</div>
                        <div className="content-text-area">
                            <form action="/">
                                <div>
                                    <textarea id="add-lesson-text-area" ref={textAreaRef} maxLength="500" onChange={onLessonTextChanged} placeholder="What did you learn?"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="content-footer">
                        <div className="submit-button" type="submit" onClick={onEditingLessonClicked} href="/">{isAddingLesson ? "Add Lesson" : "Update Lesson"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LessonInputDialog;
