import { useState } from 'react';
import '../ComponentsCSS/HotelContent.css';

function HotelContent({ tour }) {
    const [activeTab, setActiveTab] = useState('tour');

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    return (
        <div className="hotel-content">
            <div className="hotel-image">
                <img src={tour.image_url || '/static/src/default-hotel.jpg'} alt={tour.hotel_name} />
            </div>
            <div style={{ flex: '0 0 320px', gap: '0px', flexDirection: 'column' }}>
                <div className="price-tabs" style={{ flex: '0 0 350px' }}>
                    <button
                        className={`price-tab ${activeTab === 'tour' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tour')}
                        style={{ borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }}
                    >
                        Тур с перелетом
                    </button>
                    <button
                        className={`price-tab ${activeTab === 'hotel' ? 'active' : ''}`}
                        onClick={() => setActiveTab('hotel')}
                        style={{ borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}
                    >
                        Только отель
                    </button>
                </div>
                <div className="booking-panel">
                    <div className="promo-box">
                        <div className="promo_text"><span>Раннее бронирование</span></div>
                        <span>Акция действует до 31.12.2025</span>
                    </div>
                    <div className="original-price"><span>Цена от:</span></div>
                    <s>{formatPrice(tour.tour_price)} ₽</s>
                    <div className="final-price">{formatPrice(tour.tour_price)} ₽</div>
                    <div className="additional-costs">Включая обязательные доплаты 19 722,00 ₽</div>
                    <div className="payment-options">
                        <span>От 3 906,46 ₽ в месяц</span>
                        <span>в кредит или в рассрочку</span>
                    </div>
                    <div className="cashback-box">
                        <strong>1125₽ Кешбэк</strong>
                        <span>на карту CoralBonus</span>
                    </div>
                    <h3 className="meal_plan-text">Standard Room - {tour.meal_plan}</h3>
                    <div className="room-selection">
                        <div className="room-info">
                            <div>
                                <img src="/static/src/calendar.png" alt="" />
                                Даты поездки: {tour.departure_date} – {tour.end_date}
                            </div>
                            <div>
                                <img src="/static/src/bed.png" alt="" />
                                Продолжительность: {tour.nights_count} ночей
                            </div>
                            <div>
                                <img src="/static/src/persons.png" alt="" />
                                Туристы: {tour.people_count} чел.
                            </div>
                        </div>
                        <button className="edit-button">
                            <img src="/static/src/pen.png" className="miniIcon" alt="" />
                            Изменить
                        </button>
                    </div>
                    <div className="payment-options" style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '10px', paddingRight: '10px' }}>
                        <span>Итоговая стоимость</span>
                        <span style={{ color: '#0096D6' }}>{formatPrice(tour.tour_price)} ₽</span>
                    </div>
                    <button className="select-room-button">Выбрать номер</button>
                </div>
            </div>
        </div>
    );
}

export default HotelContent;