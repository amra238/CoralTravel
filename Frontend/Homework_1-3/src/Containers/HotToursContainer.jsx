import HotTourCard from '../Components/HotTourCard';
import '../ContainersCSS/HotToursContainer.css';

function HotToursContainer({ tours }) {
    return (
        <section className="hot-tours-section">
            <div className="container">
                <h2 className="section-title">Горящие туры из Казани 2025</h2>
                <div className="hot-tours-container">
                    <div className="hot-tours-header">
                        <h3 className="hot-tours-heading">Горячие предложения</h3>
                        <select className="sort-select">
                            <option>По умолчанию</option>
                        </select>
                    </div>
                    <div className="tours-slider-container" id="hot-tours-slider-wrapper">
                        <button className="nav-btn prev">&lt;</button>
                        <div className="tours-slider" id="hot-tours-slider">
                            {tours.map((tour, index) => (
                                <HotTourCard key={index} tour={tour} tourIndex={index} />
                            ))}
                        </div>
                        <button className="nav-btn next">&gt;</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HotToursContainer;