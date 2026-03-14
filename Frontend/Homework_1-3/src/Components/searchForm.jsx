import '../ComponentsCSS/SearchForm.css';

function SearchForm() {
    return (
        <div className="search-form">
            <div className="search-input-wrapper">
                <input type="text" placeholder="Город вылета" className="input-field" />
                <img src="/static/src/plane.png" className="input-icon" alt="" />
            </div>
            <div className="search-input-wrapper">
                <input type="text" placeholder="Введите страну, город или отель..." className="input-field" />
                <img src="/static/src/map.png" className="input-icon" alt="" />
            </div>
            <div className="search-input-wrapper">
                <input type="text" placeholder="дд.мм.гггг" className="input-field" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
            </div>
            <div className="search-input-wrapper">
                <input type="text" placeholder="Выбрать" className="input-field" />
                <img src="/static/src/moon.png" className="input-icon" alt="" />
            </div>
            <div className="search-input-wrapper">
                <input type="text" placeholder="2 взр." className="input-field" />
                <img src="/static/src/persons.png" className="input-icon" alt="" />
            </div>
            <button className="search-btn">Поиск</button>
        </div>
    );
}

export default SearchForm;