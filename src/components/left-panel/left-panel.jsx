import React from 'react';
import AddLesson from './date-display/date-display';
import './left-panel.css';

function LeftPanel() {
    return (
        <div className="left-panel">
            <AddLesson />
        </div>
    );
}

export default LeftPanel;