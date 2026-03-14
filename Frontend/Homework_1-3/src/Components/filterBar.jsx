import React, { useState } from 'react';
import '../ComponentsCSS/FilterBar.css';

function FilterBar() {
    const [activeFilter, setActiveFilter] = useState('Египет');

    const filters = ['Все отели', 'Турция', 'Россия', 'Египет', 'ОАЭ'];

    return (
        <div className="filter-bar">
            <div className="filter-tabs">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <select className="filter-select">
                <option>из Казани</option>
            </select>
            <select className="filter-select">
                <option>ноябрь</option>
            </select>

            <div className="filter-bar-container">
                <button className="filter-btn">
                    <img src="/static/src/list.png" alt="" />
                </button>
                <button className="filter-btn">
                    <img src="/static/src/map.png" alt="" />
                </button>
            </div>
        </div>
    );
}

export default FilterBar;