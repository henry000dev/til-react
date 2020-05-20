import React from 'react';
import Footer from './footer/footer';
import Summary from './summary/summary'
import './right-panel.css';

function RightPanel() {
    return (
        <div className="right-panel">
            <Summary />
            <Footer />
        </div>
    );
}

export default RightPanel;