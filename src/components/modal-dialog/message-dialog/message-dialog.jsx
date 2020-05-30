import React from 'react';
import './message-dialog.css';

function MessageDialog({title, message, onDialogDismissed}) {
    return (
        <div>
            <div id="messageDialog" className="messageDialog-dialog">
                <div className="message-dialog-content">
                    <div className="message-dialog-content-header">
                        <div className="title">{title}</div>
                    </div>
                    <div className="message-dialog-content-body">
                        <div className="message">{message}</div>
                    </div>
                    <div className="message-dialog-content-footer">
                        <div className="ok-button" onClick={onDialogDismissed}>OK</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageDialog;
