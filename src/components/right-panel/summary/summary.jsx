import React from 'react';
import './summary.css';

function Summary() {
    return (
        <div>
            <div className="summary-title">
                summary
            </div>
            <div className="summary-block">
                Total Days: 10
            </div>
            <div className="summary-block">
                Days with Lessons: 9
            </div>
        </div>
    );
}

export default Summary;