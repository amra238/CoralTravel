import { useNavigate } from 'react-router-dom';
import '../ComponentsCSS/HotTourCard.css';

function HotTourCard({ tour, tourIndex }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/tour/${tourIndex}`);
    };

    return (
        <div className="tour-card-hot" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className="card-image">
                <img src={tour.image_url || '/static/src/default-hotel.jpg'} alt="Отель" />
                <div className="labels">
                    <span className="label-recommended" style={{ backgroundColor: 'aliceblue', color: 'black' }}>
                        Рекомендуем
                    </span>
                    <span className="label-elite">ELITE SERVICE</span>
                </div>
            </div>
            <div className="card-info">
                <div className="location">
                    <img src="/static/src/map.png" style={{ width: '16px', height: '16px', marginRight: '5px' }} alt="" />
                    <span>{tour.arrival_city}</span>
                </div>
                <h4 className="hotel-name">{tour.hotel_name}</h4>
                <div className="rating">
                    {'★'.repeat(tour.rating || 5)}
                </div>
                <div className="price">
                    <div className="new-price">{tour.PriceDisplay}</div>
                </div>
                <div className="meal-plan">{tour.meal_plan}</div>
                <div style={{ borderTop: '1px solid #c8bebe' }}>
                    <div className="dates">{tour.departure_date} – {tour.end_date}</div>
                    <div className="details">
                        Взрослых: {tour.people_count} – Ночей: {tour.nights_count}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotTourCard;