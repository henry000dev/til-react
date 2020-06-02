import React, {useRef, useEffect} from 'react';
import './lesson-input-dialog.css';
import {createLesson} from './../../../utils/utils';

/**
 * lessonDate: Text in the following format: May 29, 2020 
 */
function LessonInputDialog({isAddingLesson, lessonDate, lessonText, onEditingLessonDone, onDeletingLessonDone, onEditingLessonCancelled}) {
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

    function onDeletingLessonClicked(evt) {
        const deletedLesson = createLesson(lessonDate, ""); // Lesson text won't matter when deleting.
        onDeletingLessonDone(evt, deletedLesson);
    }

    function renderFooter() {
        if (isAddingLesson) {
            return (
                <div className="content-footer footer-centred">
                    <div className="submit-button" onClick={onEditingLessonClicked} href="/">{isAddingLesson ? "Add Lesson" : "Update Lesson"}</div>
                </div>
            );
        } else {
            return (
                <div className="content-footer footer-spread">
                    <div className="ghost-button"></div>
                    <div className="submit-button" onClick={onEditingLessonClicked} href="/">{isAddingLesson ? "Add Lesson" : "Update Lesson"}</div>
                    <div className="delete-button" onClick={onDeletingLessonClicked} href="/"><i class="far fa-trash-alt"></i></div>
                </div>
            );
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
                    {/* Using another kind of conditional rendering. */}
                    {renderFooter()}
                </div>
            </div>
        </div>
    );
}

export default LessonInputDialog;
