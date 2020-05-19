import React from 'react';
import Header from './header/header';
import Body from './body/body';
import './middle-panel.css';

function MiddlePanel() {
    return (
        <div className="middle-panel">
            <Header />
            <Body />
        </div>
    );
}

export default MiddlePanel;