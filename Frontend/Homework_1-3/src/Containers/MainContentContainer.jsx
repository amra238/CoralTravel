import FilterBar from '../Components/filterBar';
import TourCard from '../Components/tourCard';
import '../ContainersCSS/MainContentContainer.css';

function MainContentContainer({ tours }) {
    return (
        <main className="main-content">
            <div className="container">
                <h1>Горящие туры по России, в Турцию, Египет, ОАЭ из Казани</h1>
                <FilterBar />
                <div id="tours-container" className="tours-grid">
                    {tours.length === 0 ? (
                        <div className="loading">Загрузка туров...</div>
                    ) : (
                        tours.map((tour, index) => (
                            <TourCard key={index} tour={tour} tourIndex={index} />
                        ))
                    )}
                </div>
                <div className="cta-button">
                    <button className="cta-btn">Найти горящие туры из Казани</button>
                </div>
            </div>
        </main>
    );
}

export default MainContentContainer;