import { useNavigate } from 'react-router-dom';
import '../ComponentsCSS/TourCard.css';

function TourCard({ tour, tourIndex }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tour/${tourIndex}`);
  };

  return (
    <div className="tour-card">
      <div className="tour-image">
        <img src={tour.image_url || '/static/src/default-hotel.jpg'} alt="Отель" />
      </div>
      <div className="tour-info">
        <div className="tour-location">
          <span>{tour.arrival_city}</span>
        </div>
        <div className="tour-rating">
          {'★'.repeat(tour.rating || 5)}
        </div>
        <h3 className="tour-hotel-name">{tour.hotel_name}</h3>
        <div className="tour-details">
          <span className="detail-item">
            <img src="/static/src/plane.png" alt="Вылет" style={{ width: '16px', height: '16px' }} />
            <span>{tour.departure_city}</span>
          </span>
          <span className="detail-item">
            <img src="/static/src/calendar.png" alt="Дата" style={{ width: '16px', height: '16px' }} />
            <span>{tour.departure_date}</span>
          </span>
          <span className="detail-item">
            <img src="/static/src/bed.png" alt="Ночи" style={{ width: '16px', height: '16px' }} />
            <span>{tour.nights_count} ночей</span>
          </span>
          <span className="detail-item">
            <img src="/static/src/food.png" alt="Питание" style={{ width: '16px', height: '16px' }} />
            <span>{tour.meal_plan}</span>
          </span>
        </div>
      </div>
      <div className="tour-price-block">
        <div className="price-tabs">
          <button className="price-tab active" style={{ borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }}>
            Тур с перелетом
          </button>
          <button className="price-tab" style={{ borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}>
            Только отель
          </button>
        </div>
        <div className="price-label">цена от:</div>
        <div className="price-value">{tour.PriceDisplay}</div>
        <button className="select-button" onClick={handleClick}>Выбрать</button>
      </div>
    </div>
  );
}

export default TourCard;