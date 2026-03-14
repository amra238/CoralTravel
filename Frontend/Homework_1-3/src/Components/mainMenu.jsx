import '../ComponentsCSS/MainMenu.css';

function MainMenu() {
    const menuItems = [
        'Доступные страны',
        'Горящие туры',
        'Акции',
        'Лето 2026',
        'Новогодние туры',
        'Больше'
    ];

    return (
        <nav className="main-menu">
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
            <div className="search-icon">
                <img src="/static/src/loop.png" alt="Search" />
            </div>
        </nav>
    );
}

export default MainMenu;