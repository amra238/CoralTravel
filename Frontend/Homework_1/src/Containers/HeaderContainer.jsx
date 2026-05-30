import HeaderNav from '../Components/headerNav';
import MainMenu from '../Components/mainMenu';
import Tabs from '../Components/Tabs';
import SearchForm from '../Components/searchForm';
import '../ContainersCSS/HeaderContainer.css';

function HeaderContainer({ onAuthClick }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <a href="#" className="logo">
            <img src="/static/src/main_current_31012024134246.svg" alt="Coral Travel" />
          </a>
          <HeaderNav onAuthClick={onAuthClick} />
        </div>
        <MainMenu />
        <Tabs />
        <SearchForm />
        <div className="breadcrumb">
          <a href="#">Главная</a>
          <strong> / Горящие туры из Казани</strong>
        </div>
      </div>
    </header>
  );
}

export default HeaderContainer;