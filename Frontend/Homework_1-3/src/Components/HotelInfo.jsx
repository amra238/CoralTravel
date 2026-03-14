import '../ComponentsCSS/HotelInfo.css';

function HotelInfo({ tour }) {
    return (
        <div className="hotel-info">
            <div className="hotel-info-left">
                <div className="rating-stars">
                    {'★'.repeat(tour.rating || 5)}
                </div>
                <div className="location-info">
                    <span>
                        <img src="/static/src/map.png" className="miniIcom" alt="" />
                        {tour.arrival_city}, {tour.departure_city}
                    </span>
                    <span>
                        <img src="/static/src/plane.png" className="miniIcom" alt="" />
                        {tour.nights_count} ночей
                    </span>
                </div>
            </div>
            <div className="hotel-info-right">
                <img src="/static/src/somebuttons.png" className="huge_Icon" alt="" />
                <div className="weather-box weather" style={{ right: '245px' }}>
                    <div className="weather-title">
                        <span>Воздух</span>
                        <span>средняя</span>
                    </div>
                    <div className="weather-value">
                        <img src="/static/src/tempareture.png" className="hugeIcon" alt="" />
                        15°C
                    </div>
                </div>
                <div className="weather-box weather" style={{ right: '84px' }}>
                    <div className="weather-title">
                        <span>вода</span>
                        <span>средняя</span>
                    </div>
                    <div className="weather-value">
                        <img src="/static/src/water.png" className="hugeIcon" alt="" />
                        20°C
                    </div>
                </div>
                <div className="weather-note">Декабрь средняя температура</div>
            </div>
        </div>
    );
}

export default HotelInfo;