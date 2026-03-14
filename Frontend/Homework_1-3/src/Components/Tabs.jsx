import React, { useState } from 'react';
import '../ComponentsCSS/Tabs.css';

function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { icon: '/static/src/palm.png', label: 'Туры' },
        { icon: '/static/src/build.png', label: 'Отели' },
        { icon: '/static/src/plane.png', label: 'Авиабилеты' }
    ];

    return (
        <div className="tabs">
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`tab ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                >
                    <img src={tab.icon} alt="" />
                    <p>{tab.label}</p>
                </div>
            ))}
        </div>
    );
}

export default Tabs;