import '../ComponentsCSS/HeaderNav.css';

function HeaderNav({ onAuthClick }) {
  const navItems = [
    { icon: '/static/src/phone.png', text: '+7 (495) 502 10 11' },
    { icon: '/static/src/map.png', text: 'Где купить' },
    { icon: '/static/src/browser.png', text: '₽ - ▼' },
    { icon: '/static/src/shop.png', text: 'Корзина' },
    { icon: '/static/src/heart.png', text: 'Избранное' },
  ];

  return (
    <nav className="header-nav">
      <ul className="header-links">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href="#">
              <img src={item.icon} className="header--nav--icon" alt="" />
              {item.text}
            </a>
          </li>
        ))}
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); onAuthClick(); }}>
            <img src="/static/src/user.png" className="header--nav--icon" alt="" />
            <span id="auth-text">Войдите или зарегистрируйтесь</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;