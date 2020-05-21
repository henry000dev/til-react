import React from 'react';
import './lesson-input-dialog.css';

function LessonInputDialog() {
    return (
        <div>
            <div id="lessonInput" className="lesson-input-dialog">
                <div className="dialog-content">
                    <div className="content-header">
                        <div className="title">Add Today's Lesson</div>
                        <div className="close-button">&times;</div>
                    </div>
                    <div className="content-body">
                        <div className="content-date">19 May 2020</div>
                        <div className="content-text-area">
                            <form action="/">
                                <div>
                                    <textarea placeholder="What did you learn?"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="content-footer">
                        <div className="submit-button" type="submit" href="/">Add Lesson</div>
                    </div>
                </div>
            </div>
        </div>

        // <div>
        //     <div id="lessonInput" className="lesson-input-dialog">
        //         <div className="lesson-input-dialog-content">
        //             <div className="contact-form">
        //                 <div className="close">&times;</div>
        //                 <form action="/">
        //                     <h2>Contact Us</h2>
        //                     <div>
        //                         <input type="text" name="name" placeholder="Website"></input>
        //                     </div>
        //                     <span>Message</span>
        //                     <div>
        //                         <textarea rows="4"></textarea>
        //                     </div>
        //                     <button type="submit" href="/">Submit</button>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default LessonInputDialog;
